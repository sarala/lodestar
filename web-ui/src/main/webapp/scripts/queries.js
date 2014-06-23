

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
        description: "Find other URI schemes that can identify http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0006915",
        query: "SELECT ?target WHERE {\n" +
            "<http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0006915> owl:sameAs  ?target \n" +
            "}"

    },

    {
            shortname : "Query 2",
            description: "Check whether two URI schemes are the same. Eg: http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0006915 and http://purl.bioontology.org/ontology/GO/GO:0006915",
            query: "ASK  { \n" +
                "?taget owl:sameAs  <http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0006915>; owl:sameAs <http://purl.bioontology.org/ontology/GO/GO:0006915> \n" +
                 "}"

        }


]