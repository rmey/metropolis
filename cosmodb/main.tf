variable "prefix" {
  description = "The prefix which should be used for all resources in this example"
}

variable "location" {
  description = "The Azure Region in which all resources in this example should be created."
}
resource "azurerm_resource_group" "example" {
  name     = "${var.prefix}-resources"
  location = "${var.location}"
}

resource "azurerm_cosmosdb_account" "example" {
  name                = "${var.prefix}-cosmosdb"
  location            = "${azurerm_resource_group.example.location}"
  resource_group_name = "${azurerm_resource_group.example.name}"
  offer_type          = "Standard"
  kind                = "GlobalDocumentDB"

  consistency_policy {
    consistency_level       = "BoundedStaleness"
    max_interval_in_seconds = 10
    max_staleness_prefix    = 200
  }

  geo_location {
    prefix            = "${var.prefix}-customid"
    location          = "${azurerm_resource_group.example.location}"
    failover_priority = 0
  }
}
output "cosmos-db-id" {
  value = "${azurerm_cosmosdb_account.example.id}"
}

output "cosmos-db-endpoint" {
  value = "${azurerm_cosmosdb_account.example.endpoint}"
}

output "cosmos-db-endpoints_read" {
  value = "${azurerm_cosmosdb_account.example.read_endpoints}"
}

output "cosmos-db-endpoints_write" {
  value = "${azurerm_cosmosdb_account.example.write_endpoints}"
}

output "cosmos-db-primary_master_key" {
  value = "${azurerm_cosmosdb_account.example.primary_master_key}"
}

output "cosmos-db-secondary_master_key" {
  value = "${azurerm_cosmosdb_account.example.secondary_master_key}"
}
