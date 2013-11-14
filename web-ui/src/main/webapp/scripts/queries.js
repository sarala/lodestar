

/*
 * Copyright (c) 2013 EMBL - European Bioinformatics Institute
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var exampleQueries = [

    {
        shortname : "Query 1",
        description: "List all species identifers and their names in model http://identifiers.org/biomodels.db/BIOMD0000000001",
        query: "SELECT ?speciesid ?name WHERE {\n "+
            "<http://identifiers.org/biomodels.db/BIOMD0000000001> sbmlrdf:species ?speciesid . \n "+
            "?speciesid sbmlrdf:name ?name}"
    },

    {
        shortname : "Query 2",
        description: "Get element annotations of the model http://identifiers.org/biomodels.db/BIOMD0000000001",
        query: "SELECT ?element ?qualifier ?annotation WHERE { \n"+
        "<http://identifiers.org/biomodels.db/BIOMD0000000001> ?p ?element . \n" +
        "?p rdfs:subPropertyOf sbmlrdf:sbmlElement . \n" +
        "?element ?qualifier ?annotation . \n" +
        "?qualifier rdfs:subPropertyOf sbmlrdf:sbmlAnnotation \n"+
        "}"
    },

    {
        shortname : "Query 3",
        description: "All model elements with annotations to acetylcholine-gated channel complex (http://purl.obolibrary.org/obo/GO:0005892)",
        query: "SELECT ?modelElement ?elementType ?qualifier WHERE { \n"+
            "?modelElement ?qualifier <http://purl.obolibrary.org/obo/GO:0005892> .  \n"+
            "?qualifier rdfs:subPropertyOf sbmlrdf:sbmlAnnotation . \n"+
            "?modelElement rdf:type ?elementType \n"+
            "}"
    }


]