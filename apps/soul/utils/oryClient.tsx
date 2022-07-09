import {
  Configuration,
  JsonError,
  SelfServiceLoginFlow, SelfServiceRegistrationFlow, SubmitSelfServiceRegistrationFlowBody, V0alpha2Api,
  V0alpha2ApiFactory,
} from "@ory/client";
import axios from "axios";

const axiosClient = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  withCredentials : true
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const client = V0alpha2ApiFactory(null, "http://localhost:4000/.ory", axiosClient);
