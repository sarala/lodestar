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

package uk.ac.ebi.fgpt.lode.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import uk.ac.ebi.fgpt.lode.utils.DatasourceProvider;
import virtuoso.jdbc3.VirtuosoConnectionPoolDataSource;
import virtuoso.jdbc3.VirtuosoDataSource;
import virtuoso.jdbc3.VirtuosoPooledConnection;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.ConnectionPoolDataSource;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.SQLException;

/**
 * @author Simon Jupp
 * @date 19/07/2013
 * Functional Genomics Group EMBL-EBI
 */
public class VirtuosoDatasourceProvider implements DatasourceProvider {


    private Logger logger = LoggerFactory.getLogger(getClass());

    private VirtuosoConnectionPoolDataSource virtuosoSource = null;

    public VirtuosoDatasourceProvider(){

        // Get the DataSource
        if (virtuosoSource == null) {
            try {
                Context context = (Context) (new InitialContext()).lookup("java:comp/env");
                virtuosoSource = (VirtuosoConnectionPoolDataSource) context.lookup("jdbc/virtuoso");

            } catch (NamingException e) {
                throw new IllegalStateException("Virtuoso JNDI datasource not configured: " + e.getMessage());
            }
        }
    }

    public VirtuosoDatasourceProvider(String endpointUrl, int port){

        // Get the DataSource
        if (virtuosoSource == null) {
            try {
                Context context = (Context) (new InitialContext()).lookup("java:comp/env");
                virtuosoSource = (VirtuosoConnectionPoolDataSource) context.lookup("jdbc/virtuoso");

                if (endpointUrl != null) {
                    virtuosoSource.setServerName(endpointUrl);
                    virtuosoSource.setPortNumber(port);
                    System.out.println(endpointUrl);
                }
            } catch (NamingException e) {
                throw new IllegalStateException("Virtuoso JNDI datasource not configured: " + e.getMessage());
            }
        }
    }


    public ConnectionPoolDataSource getVirtuosoDataSource() throws SQLException {

        return virtuosoSource;

    }


    public DataSource getDataSource() throws SQLException {
        return null;
    }
}