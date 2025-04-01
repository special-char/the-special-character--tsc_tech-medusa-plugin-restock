import { defineLink, DefineLinkExport } from "@medusajs/framework/utils";
import RestockModule from "../modules/restock";
import ProductModule from "@medusajs/medusa/product";

let link: DefineLinkExport | null = null;

link = defineLink(
  {
    ...RestockModule.linkable.restockSubscription.id,
    field: "variant_id",
  },
  ProductModule.linkable.productVariant,
  {
    readOnly: true,
  }
);

export default link;
