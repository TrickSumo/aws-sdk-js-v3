// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListApplicationAssignmentsForPrincipalRequest,
  ListApplicationAssignmentsForPrincipalResponse,
} from "../models/models_0";
import {
  de_ListApplicationAssignmentsForPrincipalCommand,
  se_ListApplicationAssignmentsForPrincipalCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationAssignmentsForPrincipalCommand}.
 */
export interface ListApplicationAssignmentsForPrincipalCommandInput
  extends ListApplicationAssignmentsForPrincipalRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAssignmentsForPrincipalCommand}.
 */
export interface ListApplicationAssignmentsForPrincipalCommandOutput
  extends ListApplicationAssignmentsForPrincipalResponse,
    __MetadataBearer {}

/**
 * <p>Lists the applications to which a specified principal is assigned. You must provide a
 *             filter when calling this action from a member account against your organization instance
 *             of IAM Identity Center. A filter is not required when called from the management account against an
 *             organization instance of IAM Identity Center, or from a member account against an account instance of
 *             IAM Identity Center in the same account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationAssignmentsForPrincipalCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationAssignmentsForPrincipalCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationAssignmentsForPrincipalRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 *   Filter: { // ListApplicationAssignmentsFilter
 *     ApplicationArn: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListApplicationAssignmentsForPrincipalCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAssignmentsForPrincipalResponse
 * //   ApplicationAssignments: [ // ApplicationAssignmentListForPrincipal
 * //     { // ApplicationAssignmentForPrincipal
 * //       ApplicationArn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       PrincipalType: "USER" || "GROUP",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAssignmentsForPrincipalCommandInput - {@link ListApplicationAssignmentsForPrincipalCommandInput}
 * @returns {@link ListApplicationAssignmentsForPrincipalCommandOutput}
 * @see {@link ListApplicationAssignmentsForPrincipalCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAssignmentsForPrincipalCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class ListApplicationAssignmentsForPrincipalCommand extends $Command
  .classBuilder<
    ListApplicationAssignmentsForPrincipalCommandInput,
    ListApplicationAssignmentsForPrincipalCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "ListApplicationAssignmentsForPrincipal", {})
  .n("SSOAdminClient", "ListApplicationAssignmentsForPrincipalCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationAssignmentsForPrincipalCommand)
  .de(de_ListApplicationAssignmentsForPrincipalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationAssignmentsForPrincipalRequest;
      output: ListApplicationAssignmentsForPrincipalResponse;
    };
    sdk: {
      input: ListApplicationAssignmentsForPrincipalCommandInput;
      output: ListApplicationAssignmentsForPrincipalCommandOutput;
    };
  };
}
