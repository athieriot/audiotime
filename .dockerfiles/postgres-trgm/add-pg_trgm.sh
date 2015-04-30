#!/bin/bash
echo "******ADDING TRGM POSTGRES EXTENSION******"
gosu postgres postgres --single $POSTGRES_USER <<- EOSQL
   CREATE EXTENSION pg_trgm;
EOSQL
echo ""
echo "******POSTGRES EXTENSION ADDED************"
