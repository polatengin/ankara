import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { WebSiteManagementClient } from "@azure/arm-appservice";

const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new WebSiteManagementClient(creds, subscriptionId);
  client.appServiceCertificateOrders.list().then((result: any) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.error(err);
});
