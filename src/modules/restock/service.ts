import {
  InjectManager,
  MedusaContext,
  MedusaError,
  MedusaService,
} from "@medusajs/framework/utils";
import { Context } from "@medusajs/framework/types";
import RestockSubscription from "./models/restock-subscription";
import { EntityManager } from "@mikro-orm/knex";

type ModuleOptions = {
  frontendUrl: string;
};
class RestockModuleService extends MedusaService({
  RestockSubscription,
}) {
  private options: ModuleOptions;

  constructor({}, options?: ModuleOptions) {
    super();
    this.options = options || { frontendUrl: "http://localhost:8000" };
  }

  static validateOptions(options: Record<any, any>) {
    if (!options.frontendUrl) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Option `frontendUrl` is required in the plugin's options."
      );
    }
  }

  getOptions() {
    return this.options;
  }

  @InjectManager()
  async getUniqueSubscriptions(
    @MedusaContext() context: Context<EntityManager> = {}
  ) {
    return await context.manager
      ?.createQueryBuilder("restock_subscription")
      .select(["variant_id", "sales_channel_id"])
      .distinct()
      .execute();
  }
}

export default RestockModuleService;
