// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetExportJobRequest, GetExportJobResponse, GetExportJobResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetExportJobCommand, se_GetExportJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportJobCommand}.
 */
export interface GetExportJobCommandInput extends GetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetExportJobCommand}.
 */
export interface GetExportJobCommandOutput extends GetExportJobResponse, __MetadataBearer {}

/**
 * <p>Provides information about an export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetExportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetExportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetExportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetExportJobResponse
 * //   JobId: "STRING_VALUE",
 * //   ExportSourceType: "METRICS_DATA" || "MESSAGE_INSIGHTS",
 * //   JobStatus: "CREATED" || "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //   ExportDestination: { // ExportDestination
 * //     DataFormat: "CSV" || "JSON", // required
 * //     S3Url: "STRING_VALUE",
 * //   },
 * //   ExportDataSource: { // ExportDataSource
 * //     MetricsDataSource: { // MetricsDataSource
 * //       Dimensions: { // ExportDimensions // required
 * //         "<keys>": [ // ExportDimensionValue
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Namespace: "VDM", // required
 * //       Metrics: [ // ExportMetrics // required
 * //         { // ExportMetric
 * //           Name: "SEND" || "COMPLAINT" || "PERMANENT_BOUNCE" || "TRANSIENT_BOUNCE" || "OPEN" || "CLICK" || "DELIVERY" || "DELIVERY_OPEN" || "DELIVERY_CLICK" || "DELIVERY_COMPLAINT",
 * //           Aggregation: "RATE" || "VOLUME",
 * //         },
 * //       ],
 * //       StartDate: new Date("TIMESTAMP"), // required
 * //       EndDate: new Date("TIMESTAMP"), // required
 * //     },
 * //     MessageInsightsDataSource: { // MessageInsightsDataSource
 * //       StartDate: new Date("TIMESTAMP"), // required
 * //       EndDate: new Date("TIMESTAMP"), // required
 * //       Include: { // MessageInsightsFilters
 * //         FromEmailAddress: [ // EmailAddressFilterList
 * //           "STRING_VALUE",
 * //         ],
 * //         Destination: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Subject: [ // EmailSubjectFilterList
 * //           "STRING_VALUE",
 * //         ],
 * //         Isp: [ // IspFilterList
 * //           "STRING_VALUE",
 * //         ],
 * //         LastDeliveryEvent: [ // LastDeliveryEventList
 * //           "SEND" || "DELIVERY" || "TRANSIENT_BOUNCE" || "PERMANENT_BOUNCE" || "UNDETERMINED_BOUNCE" || "COMPLAINT",
 * //         ],
 * //         LastEngagementEvent: [ // LastEngagementEventList
 * //           "OPEN" || "CLICK",
 * //         ],
 * //       },
 * //       Exclude: {
 * //         FromEmailAddress: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Destination: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Subject: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Isp: [
 * //           "STRING_VALUE",
 * //         ],
 * //         LastDeliveryEvent: [
 * //           "SEND" || "DELIVERY" || "TRANSIENT_BOUNCE" || "PERMANENT_BOUNCE" || "UNDETERMINED_BOUNCE" || "COMPLAINT",
 * //         ],
 * //         LastEngagementEvent: [
 * //           "OPEN" || "CLICK",
 * //         ],
 * //       },
 * //       MaxResults: Number("int"),
 * //     },
 * //   },
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   CompletedTimestamp: new Date("TIMESTAMP"),
 * //   FailureInfo: { // FailureInfo
 * //     FailedRecordsS3Url: "STRING_VALUE",
 * //     ErrorMessage: "STRING_VALUE",
 * //   },
 * //   Statistics: { // ExportStatistics
 * //     ProcessedRecordsCount: Number("int"),
 * //     ExportedRecordsCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExportJobCommandInput - {@link GetExportJobCommandInput}
 * @returns {@link GetExportJobCommandOutput}
 * @see {@link GetExportJobCommandInput} for command's `input` shape.
 * @see {@link GetExportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class GetExportJobCommand extends $Command
  .classBuilder<
    GetExportJobCommandInput,
    GetExportJobCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "GetExportJob", {})
  .n("SESv2Client", "GetExportJobCommand")
  .f(void 0, GetExportJobResponseFilterSensitiveLog)
  .ser(se_GetExportJobCommand)
  .de(de_GetExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportJobRequest;
      output: GetExportJobResponse;
    };
    sdk: {
      input: GetExportJobCommandInput;
      output: GetExportJobCommandOutput;
    };
  };
}
