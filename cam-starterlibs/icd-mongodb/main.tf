variable "region" {
  description = "The IBM Cloud MZR Region with ICD available"
}

variable "svcname" {
  description = "The name of the service instance"
}

variable "rg" {
  description = "The Resoure Group used"
}

variable "user" {
  description = "user name"
}

variable "password" {
  description = "password"
}

variable "adminpassword" {
  description = "adminpassword"
}

data "ibm_resource_group" "group" {
  name = "${var.rg}"
}

provider "ibm" {
  bluemix_timeout = 24000
}

resource "ibm_database" "db" {
  resource_group_id = "${data.ibm_resource_group.group.id}"
  name              = "${var.svcname}"
  service           = "databases-for-mongodb"
  plan              = "standard"
  location          = "${var.region}"

  tags = ["mongodb"]

  adminpassword                = "${var.adminpassword}"
  members_memory_allocation_mb = 2048
  members_disk_allocation_mb   = 20480

  users = {
    name     = "${var.user}"
    password = "${var.password}"
  }
}

output "connectionString" {
  value = "http://${"${ibm_database.db.connectionstrings.0.composed}"}"
}
