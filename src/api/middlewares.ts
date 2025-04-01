import {
  authenticate,
  defineMiddlewares,
  MiddlewareRoute,
  validateAndTransformBody,
} from "@medusajs/framework";
import { PostStoreCreateRestockSubscription } from "./store/restock-subscriptions/validators";

const restockRoutesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/store/restock-subscriptions",
    method: "POST",
    middlewares: [
      authenticate("customer", ["bearer", "session"], {
        allowUnauthenticated: true,
      }),
      validateAndTransformBody(PostStoreCreateRestockSubscription),
    ],
  },
];

export default defineMiddlewares(restockRoutesMiddlewares);
