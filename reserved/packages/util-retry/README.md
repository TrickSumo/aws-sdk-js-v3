# @aws-sdk/util-retry

## Deprecation

Moved to [smithy-typescript](https://github.com/awslabs/smithy-typescript/tree/main/packages).

---

This package provides shared utilities for retries.

## Usage

### Default

By default, each client already has a default retry strategy. The default retry count is 3, and
only retryable errors will be retried.

[AWS Documentation: Retry behavior](https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html).

```js
import { S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({}); // default retry strategy included.
```

### MaxAttempts

If you want to change the number of attempts, you can provide `maxAttempts` configuration during client creation.

```js
import { S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({ maxAttempts: 4 });
```

This is recommended because the `StandardRetryStrategy` includes backoff calculation,
deciding whether an error should be retried, and a retry token counter.

### MaxAttempts and BackoffComputation

If you want to change the number of attempts and use a custom delay
computation, you can use the `ConfiguredRetryStrategy` from `@aws-sdk/util-retry`.

```js
import { S3Client } from "@aws-sdk/client-s3";
import { ConfiguredRetryStrategy } from "@aws-sdk/util-retry";

const client = new S3Client({
  retryStrategy: new ConfiguredRetryStrategy(
    4, // max attempts.
    (attempt: number) => 100 + attempt * 1000 // backoff function.
  ),
});
```

This example sets the backoff at 100ms plus 1s per attempt.

### MaxAttempts and RetryStrategy

If you provide both `maxAttempts` and `retryStrategy`, the `retryStrategy` will
get precedence as it's more specific.

```js
import { S3Client } from "@aws-sdk/client-s3";
import { ConfiguredRetryStrategy } from "@aws-sdk/util-retry";

const client = new S3Client({
  maxAttempts: 2, // ignored.
  retryStrategy: new ConfiguredRetryStrategy(
    4, // used.
    (attempt: number) => 100 + attempt * 1000 // backoff function.
  ),
});
```

### Further customization

You can implement the `RetryStrategyV2` interface.

https://github.com/aws/aws-sdk-js-v3/blob/main/packages/types/src/retry.ts
