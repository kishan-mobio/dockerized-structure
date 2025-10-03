import sequelize from "../../config/postgres.js";
import TenantModel from "../../../../../models/tenant.model.js";
import AppUserModel from "../../../../../models/app_user.model.js";
import AuditLogModel from "../../../../../models/audit_log.model.js";
import RoleModel from "../../../../../models/role.model.js";
import SubscriptionModel from "../../../../../models/subscription.model.js";
import PaymentModel from "../../../../../models/payment.model.js";
import DataSourceConnectionModel from "../../../../../models/data_source_connection.model.js";
import DataSourceTransactionModel from "../../../../../models/data_source_transaction.model.js";
import GlAccountMasterModel from "../../../../../models/gl_account_master.model.js";
import AppTokenModel from "../../../../../models/app_token.model.js";
import EventTypeModel from "../../../../../models/event_type.model.js";
import RolePermissionMappingModel from "../../../../../models/role_permission_mapping.model.js";
import PermissionModel from "../../../../../models/permission.model.js";
import SubscriptionPlanModel from "../../../../../models/subscription_plan.model.js";
import PaymentMethodTypeModel from "../../../../../models/payment_method_type.model.js";
import DataSourceModel from "../../../../../models/data_source.model.js";

const models = {
  tenant: TenantModel(sequelize),
  app_user: AppUserModel(sequelize),
  audit_log: AuditLogModel(sequelize),
  role: RoleModel(sequelize),
  role_permission_mapping: RolePermissionMappingModel(sequelize),
  permission: PermissionModel(sequelize),
  subscription: SubscriptionModel(sequelize),
  subscription_plan: SubscriptionPlanModel(sequelize),
  payment: PaymentModel(sequelize),
  payment_method_type: PaymentMethodTypeModel(sequelize),
  data_source: DataSourceModel(sequelize),
  data_source_connection: DataSourceConnectionModel(sequelize),
  data_source_transaction: DataSourceTransactionModel(sequelize),
  gl_account_master: GlAccountMasterModel(sequelize),
  app_token: AppTokenModel(sequelize),
  event_type: EventTypeModel(sequelize),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export const { tenant: Tenant } = models;
export default models;
