

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

    {   shortname : "Query 1",
        description: "List all pathways",
        query: "SELECT DISTINCT ?pathway ?pathwayname  \n" +
            "WHERE  \n" +
            "{\n" +
            "?pathway rdf:type biopax3:Pathway . \n" +
            "?pathway biopax3:displayName ?pathwayname #   \n" +
            "}     \n"
    }  ,

    {
        shortname : "Query 2",
        description: "Pathways that references Insulin (http://purl.uniprot.org/uniprot/P01308)",
        query: "SELECT DISTINCT ?pathway ?pathwayname \n" +
            "WHERE \n" +
            "{?pathway rdf:type biopax3:Pathway .  \n" +
            "?pathway biopax3:displayName ?pathwayname .\n" +
            "?pathway biopax3:pathwayComponent ?reaction . \n" +
            "?reaction rdf:type biopax3:BiochemicalReaction . \n" +
            "{          \n" +
            "{?reaction ?rel ?protein .}   \n" +
            "UNION  \n" +
            "{  \n" +
            "?reaction  ?rel  ?complex . \n" +
            "?complex rdf:type biopax3:Complex .  \n" +
            "?complex ?comp ?protein . \n" +
            "}} \n" +
            "?protein rdf:type biopax3:Protein . \n" +
            "?protein biopax3:entityReference <http://purl.uniprot.org/uniprot/P01308> \n" +

            "}    \n" +

            "LIMIT 100  \n"
    }

]