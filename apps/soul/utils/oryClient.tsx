import {
  Configuration,
  JsonError,
  SelfServiceLoginFlow, SelfServiceRegistrationFlow, SubmitSelfServiceRegistrationFlowBody, V0alpha2Api,
  V0alpha2ApiFactory,
} from "@ory/client";

// @ts-ignore
export const client = new V0alpha2Api(
  new Configuration({
    basePath: 'http://localhost:4000', // instead of `https://<your-slug>.projects.oryapis.com`
    baseOptions: {
      withCredentials: true
    }
  })
)
