# Express with Postgres and Redis on Northflank

This is an example repository for running ExpressJS with a Postgres and Redis addon.

The template file `northflank.json` can be added to a Northflank template to bootstrap the service and databases.

The template file `northflank.preview.json` can be added to a Northflank preview template in a pipeline to configure preview environments.

On the settings page for the preview template, add a new trigger named `git-trigger` pointing at the repository.
