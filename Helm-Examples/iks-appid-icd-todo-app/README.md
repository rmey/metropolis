To deploy the simpleapp from the helm chart repo

1) Create a namespace for the channel on the hub-cluster
   
   `> oc new-project simpleapp-channel`

2) Deploy the channel definition
   
   ```
   > oc apply -f channel.yaml -n simpleapp-channel
   channel.app.ibm.com/simpleapp-channel created
   ```

4) Create a namespace for the subcription package
   
   `> oc new-project simpleapp-project`

5) Deploy the subcription package

    ```
    > oc apply -f simpleapp-sub -n simpleapp-project
    application.app.k8s.io/simple-application created
    subscription.app.ibm.com/simple-subscription created
    subscription.app.ibm.com/simple-subscription created
    ```
   
