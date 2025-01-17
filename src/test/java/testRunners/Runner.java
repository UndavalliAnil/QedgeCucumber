package testRunners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions( 
		features = "FeatureFiles/supplier.feature",
		glue = "stepDefinations",
		dryRun = false,
		monochrome = true,
		plugin = {"pretty","html:target/cucumber/report.html"}
		)
public class Runner {

}

