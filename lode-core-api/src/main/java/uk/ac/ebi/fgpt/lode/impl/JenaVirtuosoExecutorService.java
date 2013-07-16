package uk.ac.ebi.fgpt.lode.impl;

import com.hp.hpl.jena.query.*;
import org.springframework.beans.factory.annotation.Value;
import uk.ac.ebi.fgpt.lode.service.JenaQueryExecutionService;
import virtuoso.jena.driver.VirtGraph;
import virtuoso.jena.driver.VirtuosoQueryExecution;
import virtuoso.jena.driver.VirtuosoQueryExecutionFactory;

/**
 * @author Simon Jupp
 * @date 21/02/2013
 * Functional Genomics Group EMBL-EBI
 */
public class JenaVirtuosoExecutorService implements JenaQueryExecutionService {


    @Value("${lode.explorer.virtuoso.user}")
    private String virtuosoUser;

    @Value("${lode.explorer.virtuoso.password}")
    private String virtuosoPassword;

    @Value("${lode.explorer.virtuoso.inferencerule}")
    private String virtuosoInferenceRule;

    @Value("${lode.explorer.virtuoso.allgraphs}")
    private boolean virtuosoAllGraphs;

    public String getVirtuosoUser() {
        return virtuosoUser;
    }

    public String getVirtuosoPassword() {
        return virtuosoPassword;
    }

    public String getVirtuosoInferenceRule() {
        return virtuosoInferenceRule;
    }

    public void setVirtuosoInferenceRule(String virtuosoInferenceRule) {
        this.virtuosoInferenceRule = virtuosoInferenceRule;
    }

    public boolean isVirtuosoAllGraphs() {
        return virtuosoAllGraphs;
    }

    public void setVirtuosoAllGraphs(boolean virtuosoAllGraphs) {
        this.virtuosoAllGraphs = virtuosoAllGraphs;
    }

    public QueryExecution getQueryExecution(String serviceUri, Query query, boolean withInference) {
        VirtGraph set = new VirtGraph(serviceUri, getVirtuosoUser() , getVirtuosoPassword());
        set.setReadFromAllGraphs(isVirtuosoAllGraphs());
        if (withInference) {
            set.setRuleSet(getVirtuosoInferenceRule());
        }
        return VirtuosoQueryExecutionFactory.create(query, set);
    }

    public QueryExecution getQueryExecution(String serviceUri, String query, QuerySolutionMap initialBinding, boolean withInference) {
        VirtGraph set = new VirtGraph(serviceUri, getVirtuosoUser() , getVirtuosoPassword());
        set.setReadFromAllGraphs(isVirtuosoAllGraphs());
        if (withInference) {
            set.setRuleSet(getVirtuosoInferenceRule());
        }
        VirtuosoQueryExecution execution = VirtuosoQueryExecutionFactory.create(query, set);
        execution.setInitialBinding(initialBinding);
        return execution;
    }
}