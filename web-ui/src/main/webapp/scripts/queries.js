

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
        description: "Find all alternative URIs equivalent to a given one",
        query: "SELECT ?uris WHERE {\n" +
            "<http://purl.obolibrary.org/obo/GO_0006915> owl:sameAs ?uris \n" +
            "}"

    },

    {
            shortname : "Query 2",
            description: "Check whether two URIs identify the same concept",
            query: "ASK  { \n" +
                "?similar owl:sameAs <http://identifiers.org/go/GO:0006915>; \n" +
                "         owl:sameAs <http://purl.obolibrary.org/obo/GO_0006915> \n" +
                 "}"

    },

    {
            shortname : "Query 3",
            description: "Retrieve the description of the Gene Ontology term \"acetylcholine-gated channel complex\" from the Bio2RDF SPARQL endpoint by using its Identifiers.org URI (while Bio2RDF uses a different URI).",
            query: "PREFIX dcterms: <http://purl.org/dc/terms/>\n\n" +
                "SELECT DISTINCT ?description WHERE {\n" +
                "<http://identifiers.org/go/GO:0005892> owl:sameAs ?otherURIs . \n" +
                "   SERVICE <http://bioportal.bio2rdf.org/sparql>{ \n" +
                "      ?otherURIs dcterms:description ?description .    \n" +
                "   } \n" +
                "}\n"

    }

]

