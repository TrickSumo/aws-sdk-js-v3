// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReportInput, DeleteReportOutput } from "../models/models_0";
import { de_DeleteReportCommand, se_DeleteReportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReportCommand}.
 */
export interface DeleteReportCommandInput extends DeleteReportInput {}
/**
 * @public
 *
 * The output of {@link DeleteReportCommand}.
 */
export interface DeleteReportCommandOutput extends DeleteReportOutput, __MetadataBearer {}

/**
 * <p>
 *       Deletes a report.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteReportCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteReportCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // DeleteReportInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReportCommandInput - {@link DeleteReportCommandInput}
 * @returns {@link DeleteReportCommandOutput}
 * @see {@link DeleteReportCommandInput} for command's `input` shape.
 * @see {@link DeleteReportCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class DeleteReportCommand extends $Command
  .classBuilder<
    DeleteReportCommandInput,
    DeleteReportCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "DeleteReport", {})
  .n("CodeBuildClient", "DeleteReportCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReportCommand)
  .de(de_DeleteReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReportInput;
      output: {};
    };
    sdk: {
      input: DeleteReportCommandInput;
      output: DeleteReportCommandOutput;
    };
  };
}
