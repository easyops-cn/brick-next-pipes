import fs from "fs";
import path from "path";
import chalk from "chalk";
import * as tsdoc from "@microsoft/tsdoc";
import { ApiModel, ApiItemKind } from "@microsoft/api-extractor-model";

const apiJsonFilePath = path.join(
  __dirname,
  "../api/brick-next-pipes.api.json"
);

const apiModel = new ApiModel();
const apiPackage = apiModel.loadPackage(apiJsonFilePath);

const tsdocConf: tsdoc.TSDocConfiguration = new tsdoc.TSDocConfiguration();

const tsdocTagCategory = new tsdoc.TSDocTagDefinition({
  tagName: "@category",
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

tsdocConf.addTagDefinitions([tsdocTagCategory]);

const tsdocParser = new tsdoc.TSDocParser(tsdocConf);

console.assert(
  apiPackage.entryPoints.length === 1,
  chalk.red("Unexpected entry of api package")
);

const entry = apiPackage.entryPoints[0];

const apiJson = JSON.parse(fs.readFileSync(apiJsonFilePath, "utf-8"));
const rawPipes = apiJson.members[0].members.filter(
  (member: any) => member.kind === "Function"
);

interface PipeItem {
  name: string;
  category: string;
}

const pipes: PipeItem[] = [];

for (const member of entry.members) {
  // console.log(member.kind, member.displayName);
  if (member.kind === ApiItemKind.Function) {
    const rawPipe = rawPipes.find(
      (item: any) => item.name === member.displayName
    );
    const doc = tsdocParser.parseString(rawPipe.docComment).docComment;
    const categoryBlock = doc.customBlocks.find(
      (block) => block.blockTag.tagName === "@category"
    );
    if (!categoryBlock) {
      console.log(chalk.yellow(`Missed @category: ${member.displayName}`));
    }
    const category = categoryBlock
      ? getPlainTextOfContainer(categoryBlock.content)
          .trim()
          .toLocaleLowerCase()
      : "others";
    pipes.push({
      name: member.displayName,
      category,
    });
  }
}

fs.writeFileSync(
  path.join(__dirname, "../dist/pipes.json"),
  JSON.stringify(pipes, null, 2)
);

function getPlainTextOfContainer(docSection: tsdoc.DocNodeContainer): string {
  return docSection.nodes.map((node) => getPlainText(node)).join(" ");
}

function getPlainText(docNode: tsdoc.DocNode): string {
  // console.log("kind", docNode.kind);
  switch (docNode.kind) {
    case tsdoc.DocNodeKind.PlainText:
      return (docNode as tsdoc.DocPlainText).text;
    case tsdoc.DocNodeKind.Paragraph:
      return getPlainTextOfContainer(docNode as tsdoc.DocParagraph);
    default:
      return "";
  }
}
