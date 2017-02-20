
# hologram-node:
 
Holograms API client library for node.js

## Install:

```
 npm install hologram-node --save
```

## Getting started:

```
var Hologram = require('hologram-node');

var HologramAPI = Hologram("Your api key from the dashboard.", {
  orgid: "Your orgId from the dashboard"
});
```

## Notes:

1. All endpoints return Promises.  use `.then((data) => {}).catch((error) => {})`
2. All API methods are abstractions of the RAW endpoints you can utilize.  Docs at [https://hologram.io/docs/reference/cloud/http](https://hologram.io/docs/reference/cloud/http)

## Examples:

```

  var Hologram = require('hologram-node');

  var HologramAPI = Hologram("Your api key from the dashboard.", {
    orgid: "Your orgId from the dashboard"
  });
  
  HologramAPI.Devices.getAll().then((devices) => {
    console.log(devices);
  });
  
  HologramAPI.Devices.getOne("123").then((devices) => {
    console.log(device);
  });
  
  HologramAPI.Account.me().then((accountInfo) => {
    console.log(accountInfo);
  });

```



## API:

___

    
**HologramAPI.Account.me()**
  
Gets current user information.




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/account-management/current-user/get-user-info)



---

**HologramAPI.Account.getBalance()**
  
Retreive the current amount of credit you have on your account.




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/account-management/user-account-balance/get-current-balance)



---

**HologramAPI.Account.getBalanceHistory()**
  
Retreive a history of transactions (credits and charges).




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/account-management/user-account-balance/get-balance-history)



---

**HologramAPI.Account.getBillingInfo()**
  
Retreive the truncated version of your selected payment method.








---

**HologramAPI.Account.getOrders()**
  
Retreive the orders you have placed.








---

**HologramAPI.Account.addBalance(amountToAdd)**
  
Charge the user's configured billing source and add that amount to your account balance.


Required:
- amountToAdd *[number]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/account-management/user-account-balance/add-balance)



---


    

    
**HologramAPI.Activate.getPlans()**
  
The Data Plans endpoints return pricing and descriptions for the different data plans that Hologram offers. When changing the data plan for a cellular link via API, you must refer to the plan by its ID, which you can determine from these endpoints.




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/data-plans/list-data-plans)



---

**HologramAPI.Activate.getPlan(planId)**
  



Required:
- planId *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/data-plans/get-a-data-plan)



---

**HologramAPI.Activate.preview(sims, plan, zone, useAccountBalance)**
  
Preview the price and validity of an activation


Required:
- sims *[array]*
- plan *[number]*
- zone *[string]*
- useAccountBalance *[boolean]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/activate-sims)



---

**HologramAPI.Activate.activate(sims, plan, zone, useAccountBalance)**
  
Activate the selected sims.  Charges your configured billing method. 


Required:
- sims *[array]*
- plan *[number]*
- zone *[string]*
- useAccountBalance *[boolean]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/activate-sims)



---


    

    
**HologramAPI.Device.getOne(deviceId)**
  
Get one of your devices.


Required:
- deviceId *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/devices/get-a-device)



---

**HologramAPI.Device.getAll([options])**
  




Options:
- limit *[string]*
- startafter *[string]*



[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/devices/list-devices)



---

**HologramAPI.Device.getRouterCreds(deviceid)**
  



Required:
- deviceid *[string]*








---

**HologramAPI.Device.genRouterCreds(deviceid)**
  



Required:
- deviceid *[string]*








---

**HologramAPI.Device.linkTag(tagId, deviceids)**
  



Required:
- tagId *[string]*
- deviceids *[array]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/link-a-device-to-a-tag)



---

**HologramAPI.Device.unlinkTag(tagId, deviceids)**
  



Required:
- tagId *[string]*
- deviceids *[array]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/unlink-a-device-from-a-tag)



---

**HologramAPI.Device.changeName(deviceId, name)**
  



Required:
- deviceId *[string]*
- name *[string]*








---

**HologramAPI.Device.sendSMS(deviceId, message, [options])**
  



Required:
- deviceId *[string]*
- message *[string]*



Options:
- fromNumber *[string]*



[view docs](https://hologram.io/docs/reference/cloud/http#/reference/hologram-cloud/sms/send-sms-to-a-device)



---

**HologramAPI.Device.sendData(deviceids, data, port, protocol)**
  
Send a TCP or UDP message to one or more devices on the Hologram network. See the guide for details.


Required:
- deviceids *[array]*
- data *[string]*
- port *[string]*
- protocol *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/hologram-cloud/cloud-to-device-messaging/send-message-to-a-device)



---

**HologramAPI.Device.sendDataViaWebhook(deviceid, webhookguid, data)**
  
This endpoint does not require authentication with your API key, as the webhook GUID serves as an authentication token. In order to generate a webhook URL, please visit the cloud configuration page for your device.


Required:
- deviceid *[string]*
- webhookguid *[string]*
- data *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/hologram-cloud/cloud-to-device-messaging/send-message-to-a-device-via-webhook)



---

**HologramAPI.Device.getPhoneNumberCost(deviceId, country, [options])**
  



Required:
- deviceId *[string]*
- country *[string]*



Options:
- areacode *[string]*







---

**HologramAPI.Device.addPhoneNumber(deviceId, country, [options])**
  



Required:
- deviceId *[string]*
- country *[string]*



Options:
- areacode *[string]*







---

**HologramAPI.Device.removePhoneNumber(deviceId)**
  



Required:
- deviceId *[string]*








---

**HologramAPI.Device.setTunnelable(deviceId, tunnelable)**
  



Required:
- deviceId *[boolean]*
- tunnelable *[boolean]*








---


    

    
**HologramAPI.Link.getAll()**
  





[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/list-cellular-links)



---

**HologramAPI.Link.getOne(linkId)**
  



Required:
- linkId *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/get-cellular-link)



---

**HologramAPI.Link.getUsage(linkid)**
  



Required:
- linkid *[string]*








---

**HologramAPI.Link.pause(linkid)**
  



Required:
- linkid *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/pause-or-unpause-data)



---

**HologramAPI.Link.resume(linkid)**
  



Required:
- linkid *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/pause-or-unpause-data)



---

**HologramAPI.Link.setOverageLimit(linkId, limit)**
  



Required:
- linkId *[string]*
- limit *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/change-overage-limit)



---

**HologramAPI.Link.getStatusHistory(linkId)**
  



Required:
- linkId *[string]*








---

**HologramAPI.Link.changePlanPreview(linkid, planid, zone)**
  
Preview costs and information of changing a links plan .  


Required:
- linkid *[string]*
- planid *[number]*
- zone *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/activate-sims)



---

**HologramAPI.Link.changePlan(linkid, planid, zone)**
  
Change the plan of a selected cellular link.  Charges your user balance. 


Required:
- linkid *[string]*
- planid *[number]*
- zone *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/activate-sims)



---


    

    
**HologramAPI.Log.getAll([options])**
  




Options:
- deviceid *[string]*







---

**HologramAPI.Log.getForDevice(deviceid)**
  



Required:
- deviceid *[string]*








---


    

    
**HologramAPI.Org.getAll()**
  
List all organizations that you are a member of. This includes the special "personal" organization tied to your user.




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/account-management/user-account-balance/list-organizations)



---

**HologramAPI.Org.getOne(orgid)**
  



Required:
- orgid *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/account-management/organizations/get-an-organization)



---

**HologramAPI.Org.getPending()**
  









---


    

    
**HologramAPI.Report.billing()**
  









---

**HologramAPI.Report.devices()**
  









---


    

    
**HologramAPI.Tag.getAll()**
  





[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/list-device-tags)



---

**HologramAPI.Tag.create(name)**
  



Required:
- name *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/create-a-device-tag)



---

**HologramAPI.Tag.update(tagId, name)**
  



Required:
- tagId *[string]*
- name *[string]*








---

**HologramAPI.Tag.remove(tagId)**
  



Required:
- tagId *[string]*




[view docs](https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/delete-a-device-tag)



---


    

    
**HologramAPI.Webhook.get(deviceId)**
  



Required:
- deviceId *[string]*








---

**HologramAPI.Webhook.create(deviceId, port, protocol)**
  



Required:
- deviceId *[string]*
- port *[string]*
- protocol *[string]*








---

**HologramAPI.Webhook.update(deviceId, port, protocol)**
  



Required:
- deviceId *[string]*
- port *[string]*
- protocol *[string]*








---

**HologramAPI.Webhook.regenerate(deviceId)**
  



Required:
- deviceId *[string]*








---

**HologramAPI.Webhook.remove(deviceId)**
  



Required:
- deviceId *[string]*








---


    
