import {client} from "../../../utils/oryClient";
import {useMutation, useQuery} from "react-query";
import {JsonError, SelfServiceLoginFlow, SubmitSelfServiceLoginFlowBody} from "@ory/client";
import { AxiosError } from "axios";

async function startLoginFlow() {

  const response = await client.initializeSelfServiceLoginFlowForBrowsers(false, "aal1", "")

  return response;
}

async function postLoginForm(post: { flow: SelfServiceLoginFlow, model: SubmitSelfServiceLoginFlowBody }) {

  const response = await client.submitSelfServiceLoginFlow(post.flow.id, post.model)

  return response;
}
export function errorBoundaryBadError<T>(error: AxiosError<T>): boolean {
  return !error || !error?.response || error?.response?.status !== 400;
}

export function useStartLoginFlow() {
  return useQuery("startLoginFlow", startLoginFlow, {
    useErrorBoundary: (error: AxiosError<JsonError>) => error?.response?.status !== 200
  });
}

export function useMutateLogin(setFormError: any) {
  return useMutation(async (post: { flow: SelfServiceLoginFlow, model: SubmitSelfServiceLoginFlowBody }) => {
    return await postLoginForm(post);
  }, {
    useErrorBoundary: errorBoundaryBadError,
    onError: (error: AxiosError<SelfServiceLoginFlow>) => {
      if (error.response) {
        //Todo: OnErrorFormUserFeedback(error, setFormError, defaultLoginFieldValues);
      }
    }
  })
}
