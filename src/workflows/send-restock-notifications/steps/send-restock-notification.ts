import { createStep } from "@medusajs/framework/workflows-sdk";
import { InferTypeOf, ProductVariantDTO } from "@medusajs/framework/types";
import RestockSubscription from "../../../modules/restock/models/restock-subscription";
import restockNotificationTemplate from "../../../utils/restockNotificationTemplate";
import { RESTOCK_MODULE } from "../../../modules/restock";
import RestockModuleService from "../../../modules/restock/service";

type SendRestockNotificationStepInput = (InferTypeOf<
  typeof RestockSubscription
> & {
  product_variant?: ProductVariantDTO;
})[];

export const sendRestockNotificationStep = createStep(
  "send-restock-notification",
  async (input: SendRestockNotificationStepInput, { container }) => {
    const notificationModuleService = container.resolve("notification");
    const restockNotificationService:RestockModuleService = container.resolve(RESTOCK_MODULE)

    const restockModuleOptions = await restockNotificationService.getOptions()


    const notificationData = input.map((subscription) => ({
      to: subscription.email,
      channel: "email",
      template: restockNotificationTemplate(subscription.product_variant, restockModuleOptions.frontendUrl),
    }));

    await notificationModuleService.createNotifications(notificationData);
  }
);
