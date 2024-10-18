import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const amplifyClient = generateClient<Schema>();
export { amplifyClient };
