{
  "template_input_params": [
    {
      "name": "location",
      "description": "The Azure Region in which all resources in this example should be created.",
      "type": "string",
      "required": true,
      "secured": false,
      "label": "location",
      "hidden": false,
      "immutable": false
    },
    {
      "name": "prefix",
      "description": "The prefix which should be used for all resources in this example",
      "type": "string",
      "required": true,
      "secured": false,
      "label": "prefix",
      "hidden": false,
      "immutable": false
    }
  ],
  "template_output_params": [
    {
      "name": "cosmos-db-endpoint",
      "label": "cosmos-db-endpoint",
      "description": "",
      "secured": false,
      "hidden": false
    },
    {
      "name": "cosmos-db-endpoints_read",
      "label": "cosmos-db-endpoints_read",
      "description": "",
      "secured": false,
      "hidden": false
    },
    {
      "name": "cosmos-db-endpoints_write",
      "label": "cosmos-db-endpoints_write",
      "description": "",
      "secured": false,
      "hidden": false
    },
    {
      "name": "cosmos-db-id",
      "label": "cosmos-db-id",
      "description": "",
      "secured": false,
      "hidden": false
    },
    {
      "name": "cosmos-db-primary_master_key",
      "label": "cosmos-db-primary_master_key",
      "description": "",
      "secured": false,
      "hidden": false
    },
    {
      "name": "cosmos-db-secondary_master_key",
      "label": "cosmos-db-secondary_master_key",
      "description": "",
      "secured": false,
      "hidden": false
    }
  ]
}
