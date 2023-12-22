
import React, { Component } from 'react';
import { View,  Text,Platform, Switch,ComponentProvider, Dimensions, Button, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, useState, ImageBackground } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import cp from './assets/cp.png'
import { ScreenStackHeaderSubview } from 'react-native-screens';
import loan from './assets/loan.gif';
import mort from './assets/mort.gif';
import simple from './assets/simple.gif';
import compound from './assets/compound.gif';
import tax from './assets/tax.gif';
import bus from './assets/bus.gif';
import credit from './assets/credit.gif';


function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.headerviewnormal}>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
      </View>
      <View style={styles.contentblock1}>
        <Text style={styles.title}>Finance Hub</Text>
        <Text style={styles.subtitle}>Information</Text>
        
        <View style={styles.mainblock}>
          
          <TouchableOpacity onPress={() => navigation.navigate('Loans Basics')}>
            
            <Text style={styles.button}><Text style={styles.single}>Loans Basics</Text></Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('Simple Interest')}>
            <Text style={styles.button}>Simple{'\n'} Interest</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainblock}>
          <TouchableOpacity onPress={() => navigation.navigate('Compound Interest')}>
            <Text style={styles.button}>Compound{'\n'} Interest</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Mortgage')}>
            <Text style={styles.button}><Text style={styles.single}>Mortgage</Text></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainblock}>
          <TouchableOpacity onPress={() => navigation.navigate('Tax')}>
            <Text style={styles.button}><Text style={styles.single}>Tax</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Credit Score')}>
            <Text style={styles.button}><Text style={styles.single}>Credit Score</Text></Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Business Fundamentals')}>
          
          <Text style={styles.button}>Business {'\n'} Fundamentals</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function LoanScreen({ navigation }) {
  return (
<ScrollView style={styles.scrollcontainer}>
    <View style={styles.maincontainer}>
      <View style={styles.headerview1}>
        
        <View style={styles.topheading}>
          <Text style={styles.topheadingtext}>Loan Basics</Text>
        </View>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
      </View>
      
      
      <View style={styles.top}>
        <ImageBackground source={loan} style={styles.bcgroundimage}/>
      </View>
      <View style={styles.contentblock}>
        <Text style={styles.header}>What are Loans?</Text>
        <Text style={styles.body}>The term loan refers to a type of credit vehicle in which a sum of money is lent to another party in exchange for future repayment of the value or principal amount. In many cases, the lender also adds interest and/or finance charges to the principal value which the borrower must repay in addition to the principal balance. Loans may be for a specific, one-time amount, or they may be available as an open-ended line of credit up to a specified limit. Loans come in many different forms including secured, unsecured, commercial, and personal loans.</Text>
        <Text style={styles.header}>Why take out a Loan?</Text>
        <Text style={styles.body}>You will probably need to take out a loan during your lifetime. Whether you’re buying a car or a home, starting a business, consolidating debt, facing unexpected expenses, or paying for a college education, there will be situations when you’ll need more money for a purchase or bill than you have in savings.</Text>
        <Text style={styles.body}>A loan is often a better choice for a ready source of cash than a credit card because interest rates on loans are generally considerably lower than on purchases you make via credit cards.</Text>
        <Text style={styles.header}>How do Loans Work?</Text>
        <Text style={styles.body}>When someone needs money, they apply for a loan from a bank, corporation, government, or other entity. The borrower may be required to provide specific details such as the reason for the loan, their financial history, Social Security Number (SSN), and other information. The lender reviews the information including a person's debt-to-income (DTI) ratio to see if the loan can be paid back. <Text>{'\n'}</Text></Text>
        <Text style={styles.body}>Based on the applicant's creditworthiness, the lender either denies or approves the application. The lender must provide a reason should the loan application be denied. If the application is approved, both parties sign a contract that outlines the details of the agreement. The lender advances the proceeds of the loan, after which the borrower must repay the amount including any additional charges such as interest.</Text>
        <View style={styles.mainblockcontent}>
        <Icon name="chevron-back" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Business Fundamentals')}
          />
          <Icon name="home" size={35} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Information')}
          />

          <Icon name="chevron-forward" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Simple Interest')}
          />
          
        </View>
        </View>
      
    </View>
    </ScrollView>
  );
}
function SimpleScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollcontainer}>
    <View style={styles.maincontainer}>
      <View style={styles.headerview1}>
      <View style={styles.topheading}>
          <Text style={styles.topheadingtext}>Simple Interest</Text>
        </View>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
        
      </View>
      
      <View style={styles.top}>
        <ImageBackground source={simple} style={styles.bcgroundimage1}/>
      </View>
      <View style={styles.contentblock}>
        <Text style={styles.header}>What is Simple Inerest?</Text>
        <Text style={styles.body}>Simple interest is a quick and easy method of calculating the interest charge on a loan. Simple interest is determined by multiplying the daily interest rate by the principal by the number of days that elapse between payments.This type of interest usually applies to automobile loans or short-term loans, although some mortgages use this calculation method.</Text>
        <Text style={styles.header}>Understanding Simple Interest?</Text>
        <Text style={styles.body}>When you make a payment on a simple interest loan, the payment first goes toward that month’s interest, and the remainder goes toward the principal. Each month’s interest is paid in full so it never accrues (builds up). In contrast, compound interest adds some of the monthly interest back onto the loan; in each succeeding month, you pay new interest on old interest.</Text>
        <Text style={styles.header}>Example:</Text>
        <Text style={styles.body}>To understand how simple interest works, consider an automobile loan that has a $15,000 principal balance and an annual 5% simple interest rate. If your payment is due on May 1 and you pay it precisely on the due date, the finance company calculates your interest on the 30 days in April. Your interest for 30 days is $61.64 under this scenario. However, if you make the payment on April 21, the finance company charges you interest for only 20 days in April, dropping your interest payment to $41.09, a $20 savings. <Text>{'\n'}</Text></Text>
        <Text style={styles.header}>Formula</Text>
        <Text style={styles.body}>Simple Interest = P × I × N</Text>
        <Text style={styles.body}>P=principle <Text>{'\n'}</Text>I=daily interest rate<Text>{'\n'}</Text>N=number of days between payments
​	</Text>

        <View style={styles.mainblockcontent}>
          <Icon name="chevron-back" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Loans Basics')}
          />
          <Icon name="home" size={35} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Information')}
          />

          <Icon name="chevron-forward" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Compound Interest')}
          />
        </View>
        </View>
      
    </View>
    </ScrollView>
  );
}

function CompoundScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollcontainer}>
    <View style={styles.maincontainer}>
      <View style={styles.headerview1}>
      <View style={styles.topheading}>
          <Text style={styles.topheadingtext}>Compound Interest</Text>
        </View>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
        
      </View>
      
      <View style={styles.top}>
        <ImageBackground source={compound} style={styles.bcgroundimage}/>
      </View>
      <View style={styles.contentblock}>
        <Text style={styles.header}>What is Compound Inerest?</Text>
        <Text style={styles.body}>Compound interest (or compounding interest) is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. Thought to have originated in 17th-century Italy, compound interest can be thought of as "interest on interest," and will make a sum grow at a faster rate than simple interest, which is calculated only on the principal amount</Text>
        <Text style={styles.body}>The rate at which compound interest accrues depends on the frequency of compounding, such that the higher the number of compounding periods, the greater the compound interest. Thus, the amount of compound interest accrued on $100 compounded at 10% annually will be lower than that on $100 compounded at 5% semi-annually over the same time period. Since the interest-on-interest effect can generate increasingly positive returns based on the initial principal amount, it has sometimes been referred to as the "miracle of compound interest."</Text>
        <Text style={styles.header}>Calculating Compound Interest</Text>
        <Text style={styles.body}>Compound interest is calculated by multiplying the initial principal amount by one plus the annual interest rate raised to the number of compound periods minus one. The total initial amount of the loan is then subtracted from the resulting value.<Text>{'\n'}</Text></Text>
        <Text style={styles.header}>Formula</Text>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={cp} style={styles.image} /></View>

        <View style={styles.mainblockcontent}>
          <Icon name="chevron-back" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Simple Interest')}
          />
          <Icon name="home" size={35} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Information')}
          />

          <Icon name="chevron-forward" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Mortgage')}
          />
        </View>
        </View>
      
    </View>
    </ScrollView>
  );
}

function MortgageScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollcontainer}>
    <View style={styles.maincontainer}>
      <View style={styles.headerview1}>
      <View style={styles.topheading}>
          <Text style={styles.topheadingtext}>Mortgage</Text>
        </View>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
        
      </View>
      
      <View style={styles.top}>
        <ImageBackground source={mort} style={styles.bcgroundimage}/>
      </View>
      <View style={styles.contentblock}>
        <Text style={styles.header}>What Is a Mortgage?</Text>
        <Text style={styles.body}>A mortgage is a loan that the borrower uses to purchase or maintain a home or other form of real estate and agrees to pay back over time, typically in a series of regular payments. The property serves as collateral to secure the loan.</Text>
        <Text style={styles.header}>How Mortgages Work</Text>
        <Text style={styles.body}>Individuals and businesses use mortgages to buy real estate without paying the entire purchase price upfront. Over a specified number of years, the borrower repays the loan, plus interest, until they own the property free and clear. Mortgages are also known as "liens against property" or "claims on property." If the borrower stops paying the mortgage, the lender can foreclose on the property.<Text>{'\n'}</Text></Text>
        <Text style={styles.body}>For example, in a residential mortgage, a homebuyer pledges their house to the bank or other lender, which then has a claim on the property should the buyer default on paying the mortgage. In the case of a foreclosure, the lender may evict the home's residents and sell the property, using the money from the sale to pay off the mortgage debt.</Text>
        <Text style={styles.header}>The Mortgage Process</Text>
        <Text style={styles.body}>Would-be borrowers begin the process by applying to one or more mortgage lenders. The lender will ask for evidence that the borrower is capable of repaying the loan, which might include bank and investment statements, recent tax returns, and proof of current employment. The lender will generally run a credit check, as well.</Text>
        <Text style={styles.body}>If the application is approved, the lender will offer the borrower a loan of up to a certain amount and at a particular interest rate. Homebuyers can apply for a mortgage after they have chosen a property to buy or while they are still shopping for one, a process known as pre-approval. Being pre-approved for a mortgage can give buyers an edge in a tight housing market because sellers will know that they have the money to back up their offer.</Text>
        <Text style={styles.body}>Once a buyer and seller have agreed on the terms of their deal, they or their representatives will meet at what's called a closing. The seller will transfer ownership of the property to the buyer and receive the agreed-upon sum of money, and the buyer will sign any remaining mortgage documents.</Text>
        <View style={styles.mainblockcontent}>
          <Icon name="chevron-back" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Compound Interest')}
          />
          <Icon name="home" size={35} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Information')}
          />

          <Icon name="chevron-forward" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Tax')}
          />
        </View>
        </View>
      
    </View>
    </ScrollView>
  );
}
function TaxScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollcontainer}>
    <View style={styles.maincontainer}>
      <View style={styles.headerview1}>
      <View style={styles.topheading}>
          <Text style={styles.topheadingtext}>Tax</Text>
        </View>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
        
      </View>
      
      <View style={styles.top}>
        <ImageBackground source={tax} style={styles.bcgroundimage}/>
      </View>
      <View style={styles.contentblock}>
        <Text style={styles.header}>What Are Taxes?</Text>
        <Text style={styles.body}>Taxes are involuntary fees levied on individuals or corporations and enforced by a government entity—whether local, regional or national—in order to finance government activities. In economics, taxes fall on whomever pays the burden of the tax, whether this is the entity being taxed, such as a business, or the end consumers of the business's goods.</Text>
        <Text style={styles.header}>Understanding Taxes</Text>

        <Text style={styles.body}>To help fund public works and services—and to build and maintain the infrastructures used in a country—the government usually taxes its individual and corporate residents. The tax collected is used for the betterment of the economy and all living in it. In the U.S. and many other countries in the world, taxes are applied to some form of money received by a taxpayer. The money could be income earned from salary, capital gains from investment appreciation, dividends received as additional income, payment made for goods and services, etc.</Text>
        <Text style={styles.body}>A percentage of the taxpayer’s earnings or money is taken and remitted to the government. Payment of taxes at rates levied by the state is compulsory, and tax evasion—the deliberate failure to pay one's full tax liabilities—is punishable by law. Most governments use an agency or department to collect taxes; in the United States, this function is performed by the Internal Revenue Service (IRS).</Text>
        <Text style={styles.header}>Types of Taxes:</Text>
        <Text style={styles.body}>
          <Text style={styles.bold}>Income Tax:</Text> a percentage of individual earnings filed to the federal government</Text>
          <Text style={styles.body}><Text style={styles.bold}>Corporate Tax:</Text>  a percentage of corporate profits taken as tax by the government to fund federal programs.</Text>
          <Text style={styles.body}><Text style={styles.bold}>Sales Tax:</Text>  taxes levied on certain goods and services</Text>
          <Text style={styles.body}><Text style={styles.bold}>Property Tax:</Text>  based on the value of land and property assets</Text>
          <Text style={styles.body}><Text style={styles.bold}>Tariff:</Text>  taxes on imported goods imposed in the aim of strengthening internal businesses</Text>
          <Text style={styles.body}><Text style={styles.bold}>Estate tax:</Text>  rate applied to the fair market value of property in a person's estate at the time of death</Text>

        


        <View style={styles.mainblockcontent}>
          <Icon name="chevron-back" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Mortgage')}
          />
          <Icon name="home" size={35} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Information')}
          />

          <Icon name="chevron-forward" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Credit Score')}
          />
          
        </View>
      </View>
      
    </View>
    </ScrollView>
  );
}

function CreditScoreScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollcontainer}>
    <View style={styles.maincontainer}>
      <View style={styles.headerview1}>
      <View style={styles.topheading}>
          <Text style={styles.topheadingtext}>Credit Score</Text>
        </View>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
        
      </View>
      
      <View style={styles.top}>
        <ImageBackground source={credit} style={styles.bcgroundimage}/>
      </View>
      <View style={styles.contentblock}>
        <Text style={styles.header}>What Is a Credit Score?</Text>
        <Text style={styles.body}>A credit score is a number between 300–850 that depicts a consumer's creditworthiness. The higher the score, the better a borrower looks to potential lenders. A credit score is based on credit history: number of open accounts, total levels of debt, and repayment history, and other factors. Lenders use credit scores to evaluate the probability that an individual will repay loans in a timely manner.</Text>
        <Text style={styles.body}>The credit score model was created by the Fair Isaac Corporation, also known as FICO, and it is used by financial institutions. While other credit-scoring systems exist, the FICO score is by far the most commonly used. There are a number of ways to improve an individual's score, including repaying loans on time and keeping debt low. </Text>

        <Text style={styles.header}>How do Credit Scores Work?</Text>
        <Text style={styles.body}>A credit score can significantly affect your financial life. It plays a key role in a lender's decision to offer you credit. People with credit scores below 640, for example, are generally considered to be subprime borrowers. Lending institutions often charge interest on subprime mortgages at a rate higher than a conventional mortgage in order to compensate themselves for carrying more risk. They may also require a shorter repayment term or a co-signer for borrowers with a low credit score.</Text>
        <Text style={styles.body}>Conversely, a credit score of 700 or above is generally considered good and may result in a borrower receiving a lower interest rate, which results in their paying less money in interest over the life of the loan. Scores greater than 800 are considered excellent. While every creditor defines its own ranges for credit scores, the average FICO score range is often used:</Text>

        
        <Text style={styles.body}><Text style={styles.bold}>Excellent: </Text>800 to 850</Text>
        <Text style={styles.body}><Text style={styles.bold}>Very Good: </Text>740 to 799</Text>
        <Text style={styles.body}><Text style={styles.bold}>Good: </Text>670 to 739</Text>
        <Text style={styles.body}><Text style={styles.bold}>Fair: </Text>580 to 669</Text>
        <Text style={styles.body}><Text style={styles.bold}>Poor:</Text>300 to 579</Text>

        


        <View style={styles.mainblockcontent}>
          <Icon name="chevron-back" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Tax')}
          />
          <Icon name="home" size={35} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Information')}
          />

          <Icon name="chevron-forward" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Business Fundamentals')}
          />
        </View>
        </View>
      
    </View>
    </ScrollView>
  );
}
function BusinessScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollcontainer}>
    <View style={styles.maincontainer}>
      <View style={styles.headerview1}>
      <View style={styles.topheading}>
          <Text style={styles.topheadingtext}>Business Fundamentals</Text>
        </View>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
        
      </View>
      
      <View style={styles.top}>
        <ImageBackground source={bus} style={styles.bcgroundimage}/>
      </View>
      <View style={styles.contentblock}>
        <Text style={styles.header}>What are Business Fundamentals?</Text>
        <Text style={styles.body}>Fundamentals include the basic qualitative and quantitative information that contributes to the financial or economic well-being of a company, security, or currency, and their subsequent financial valuation. Where qualitative information includes elements that cannot be directly measured, such as management experience, quantitative analysis (QA) uses mathematics and statistics to understand the asset and predict its movements.</Text>

        <Text style={styles.header}>Understanding Fundamentals</Text>
        <Text style={styles.body}>In business and economics, fundamentals represent the primary characteristics and financial data necessary to determine the stability and health of an asset. This data can include macroeconomic, or large-scale factors, and microeconomic, or small-scale factors to set a value on securities or businesses.</Text>
        <Text style={styles.body}>Analysts and investors examine these fundamentals to develop an estimate as to whether the underlying asset is considered a worthwhile investment, and if there is fair valuation in the market. For businesses, information such as profitability, revenue, assets, liabilities, and growth potential are considered fundamentals. Through the use of fundamental analysis, you may calculate a company's financial ratios to determine the feasibility of the investment.</Text>
        <Text style={styles.body}>While fundamentals are most often considered factors that relate to particular businesses or securities, national economies, and their currencies also have a set of fundamentals that can be analyzed. For example, interest rates, gross domestic product (GDP) growth, trade balance surplus/deficits, and inflation levels are some factors that are considered to be fundamentals of a nation's value.</Text>
        <Text style={styles.header}>Fundamentals in Business</Text>
        <Text style={styles.body}>By looking at the economics of a business, including the overall management and the financial statements, investors are looking at a company's fundamentals. Not only do these data points show the health of the business, but they also indicate the probability of further growth. A company with little debt and sufficient cash is considered to have strong fundamentals.</Text>
        <Text style={styles.body}>Strong fundamentals suggest that a business has a viable framework or financial structure. Conversely, those with weak fundamentals may have issues in the areas of debt obligation management, cost control, or overall organizational management. A business with strong fundamentals may be more likely to survive adverse events, like economic recessions or depressions, than one with weaker fundamentals. Also, strength may indicate less risk should an investor consider purchasing securities associated with the businesses mentioned.</Text>

        <View style={styles.mainblockcontent}>
          <Icon name="chevron-back" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Credit Score')}
          />
          <Icon name="home" size={35} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Information')}
          />
          <Icon name="chevron-forward" size={35} color="#000000" padding={10}
            onPress={() => navigation.navigate('Loan Basics')}
          />

        </View>
        </View>
      
    </View>
    </ScrollView>
  );
}

//Second Tab Screen-Calculators

function CalculatorHomeScreen({ navigation }) {
  return (

    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.headerviewnormal}>
        <View style={styles.iconheading}>
          <Icon name="menu" size={35} color="#37ECB9"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          /></View>
      </View>
      <View style={styles.contentblock1}>
        <Text style={styles.title}>Financial Hub</Text>
        <Text style={styles.subtitle}>Calculators</Text>
        <Text>{'\n'}</Text>
        <View style={styles.mainblock}>
          <TouchableOpacity onPress={() => navigation.navigate('Loan Calculator')}>
            <Text style={styles.button1}>Loan Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Simple Interest Calculator')}>
            <Text style={styles.button1}>Simple Interest{'\n'} Calculator </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainblock}>
          <TouchableOpacity onPress={() => navigation.navigate('Compound Interest Calculator')}>
            <Text style={styles.button1}>Compound Interest {'\n'}Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Mortgage Calculator')}>
            <Text style={styles.button1}>Mortgage Calculator</Text>
          </TouchableOpacity>
        </View>
        
          <TouchableOpacity onPress={() => navigation.navigate('Cost Profit Calculator')}>
            <Text style={styles.button1}>Cost Profit Calculator</Text>
          </TouchableOpacity>
          
        

      </View>
    </ScrollView>
  );

}

function LoanCalculatorScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [principal, setprincipal] = React.useState();
  const [interestrate, setrate] = React.useState();
  const [period, setperiod] = React.useState();
  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 
  return (
    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.maincontainer}>
        <View style={styles.headerview}>
        <View style={styles.iconheading}>
          <Icon name="calculator-outline" size={30} color="#37ECB9"
            onPress={() => navigation.navigate('Home')}
          /></View>
          
          <View style={styles.topheading}>
            <Text style={styles.topheadingtext}>Loan Calculator</Text>
          </View>
          <View style={styles.iconheading}>
            <Icon name="menu" size={30} color="#37ECB9"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            /></View>
        </View>
        <View style={styles.contentblock1}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
          <View style={styles.mainblock1}>
            <View style={styles.calctxt}>
            <Text style={styles.header}>Loan Amount</Text></View>
            
            <View style={styles.calcinp}>
              <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={principal}
              onChangeText={setprincipal} /></View>
              
          </View>
          
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Annual Interest Rate</Text></View>
            
            <View style={styles.calcinp}><TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={interestrate}
              onChangeText={setrate} /></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Period-Yearly</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={period}
              onChangeText={setperiod} /></View>
          </View>
          <Text style={styles.header}>Find out Monthly Payment:</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Loan Result', { principal: principal, interestrate: interestrate, period: period, isEnabled:isEnabled })} style={styles.submitButton}>
            <Text style={styles.header1}>Enter</Text>
          </TouchableOpacity>
          <View style={styles.mainblockcontent1}>
          <Icon name="arrow-back-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Cost Profit Calculator')}
          />
          <Icon name="arrow-forward-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Simple Interest Calculator')}
          />


        </View>

        </View>
      </View>
    </ScrollView>
  );

}




 
function LoanCalcResScreen({ route,navigation }) {
  const { principal } = route.params;
  const { interestrate } = route.params;
  const { period } = route.params;
  const { isEnabled } = route.params;
  var rate = 0;
  var interest=interestrate;
  var amount = 0;
  var final = 0;
  var n = 0;
  var n1=0;
  var comment = 0;
  var monthly = 0;
  
  rate=interest/100
    interest=rate+1
    interest=Math.pow(interest, period)
    amount=1/interest
    amount=(1-amount)/rate
    amount=amount.toFixed(4);
    final=principal/amount
    final=final.toFixed(2);
    monthly=final/12
    monthly=monthly.toFixed(2);
    comment='This is how much your Monthly payments are: ';

  n1=principal*rate
  
  return (
    
    <View style={styles.maincontainer}>
      <View style={styles.headerview}>
        <View style={styles.iconheading}>
          </View>
          
      </View>
      <View style={styles.contentblock2}>
      
        <Text>{comment}  </Text>
        <Text>{'\n'}</Text>
        <Text style={styles.title}>{monthly}</Text>
        <Text>{'\n'}</Text>
        <Text>The Yearly Payment is:</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.subtitle}>{final}</Text>
        <Text>{'\n'}</Text>
        <Text>The Interest Payment is:</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.subtitle}>{n1}</Text>
        
        
      </View>
    </View>
  );

}

function SimpleCalculatorScreen({ navigation }) {
  const [p, setp] = React.useState();
  const [r, setr] = React.useState();
  const [t, sett] = React.useState();
  return (

    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.maincontainer}>
        <View style={styles.headerview}>
        <View style={styles.iconheading}>
          <Icon name="calculator-outline" size={30} color="#37ECB9"
            onPress={() => navigation.navigate('Home')}
          /></View>
          
          <View style={styles.topheading}>
            
            <Text style={styles.topheadingtext}>Simple Interest Calculator</Text>
          </View>
          <View style={styles.iconheading}>
            <Icon name="menu" size={30} color="#37ECB9"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            /></View>
        </View>
        <View style={styles.contentblock1}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Enter Principal</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={p}
              onChangeText={setp} /></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Interest Rate</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={r}
              onChangeText={setr} /></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Period-Yearly</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={t}
              onChangeText={sett} /></View>
          </View>
          <Text style={styles.header}>Find out the Payment:</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Simple Result', { p:p,r:r,t:t })} style={styles.submitButton}>
            <Text style={styles.header1}>Enter</Text>
          </TouchableOpacity>
          <View style={styles.mainblockcontent1}>
          <Icon name="arrow-back-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Loan Calculator')}
          />
          <Icon name="arrow-forward-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Compound Interest Calculator')}
          />


        </View>

        </View>
      </View>
    </ScrollView>
  );

}
function SimpleCalcResScreen({ route,navigation }) {
  const { p } = route.params;
  const { r } = route.params;
  const { t } = route.params;
  var comment='\n';
  var a = 0;
  var i = 0;
  var n = 0;
  var w = p;  
  n=r/100
  a=p*n*t
  i=parseInt(w)+parseInt(a)
  comment='This is the Payment in Simple Interest: ';

  
  return (
    
    <View style={styles.maincontainer}>
      <View style={styles.headerview}>
        <View style={styles.iconheading}>
          </View>
          
      </View>
      <View style={styles.contentblock2}>
      
        <Text>{comment}  </Text>
        <Text>{'\n'}</Text>
        <Text style={styles.title}>{i}</Text>
        <Text>{'\n'}</Text>
        <Text>The interest amount:</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.subtitle}>{a}</Text>
        
        
      </View>
    </View>
  );

}
function CompoundCalculatorScreen({ navigation }) {
  

  const [pc, setpc] = React.useState();
  const [rc, setrc] = React.useState();
  const [tc, settc] = React.useState();
  return (

    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.maincontainer}>
        <View style={styles.headerview}>
        <View style={styles.iconheading}>
          <Icon name="calculator-outline" size={30} color="#37ECB9"
            onPress={() => navigation.navigate('Home')}
          /></View>
          
          <View style={styles.topheading}>
            <Text style={styles.topheadingtext}>Compound Interest Calculator</Text>
          </View>
          <View style={styles.iconheading}>
            <Icon name="menu" size={30} color="#37ECB9"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            /></View>
        </View>
        <View style={styles.contentblock1}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Enter Principal</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={pc}
              onChangeText={setpc} /></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Interest Rate</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={rc}
              onChangeText={setrc} /></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Period-Yearly</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={tc}
              onChangeText={settc} /></View>
          </View>
          <Text style={styles.header}>Find out the Payment:</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Compound Result', { pc:pc,rc:rc,tc:tc })} style={styles.submitButton}>
            <Text style={styles.header1}>Enter</Text>
          </TouchableOpacity>
          <View style={styles.mainblockcontent1}>
          <Icon name="arrow-back-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Simple Interest Calculator')}
          />
          <Icon name="arrow-forward-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Mortgage Calculator')}
          />


        </View>

        </View>
      </View>
    </ScrollView>
  );

}
function CompoundCalcResScreen({ route, navigation }) {
  const { pc } = route.params;
  const { rc } = route.params;
  const { tc } = route.params;
  var comment='\n';
  var a = 0;
  var i = 0;
  var n = 0;
  var w = 0;
  var l = 0;  
  i=rc/100
  n=1+i
  a=Math.pow(n,tc)
  w=pc*a
  w=w.toFixed(2)
  comment='This is the Payment in Compound Interest: ';

  l=parseInt(w)-parseInt(pc)
  
  return (
    
    <View style={styles.maincontainer}>
      <View style={styles.headerview}>
        <View style={styles.iconheading}>
          </View>
          
      </View>
      <View style={styles.contentblock2}>
        
        <Text>{comment}  </Text>
        <Text>{'\n'}</Text>
        <Text style={styles.title}>{w}</Text>
        <Text>{'\n'}</Text>
        <Text>The interest amount:</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.subtitle}>{l}</Text>
        
        
      </View>
    </View>
  );

}
function MortgageCalculatorScreen({ navigation }) {
  const [cost, setcost] = React.useState();
  const [int, setint] = React.useState();
  const [yr, setyr] = React.useState();
  const [down, setdown] = React.useState();
  return (

    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.maincontainer}>
        <View style={styles.headerview}>
        <View style={styles.iconheading}>
          <Icon name="calculator-outline" size={30} color="#37ECB9"
            onPress={() => navigation.navigate('Home')}
          /></View>
          
          <View style={styles.topheading}>
            <Text style={styles.topheadingtext}>Mortgage Calculator</Text>
          </View>
          <View style={styles.iconheading}>
            <Icon name="menu" size={30} color="#37ECB9"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            /></View>
        </View>
        <View style={styles.contentblock3}>
        
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Enter Cost of Home</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={cost}
              onChangeText={setcost} /></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Interest Rate</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={int}
              onChangeText={setint} /></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctxt}>
            <Text style={styles.header}>Period-Yearly</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={yr}
              onChangeText={setyr} /></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctext}>
            <Text style={styles.header}>Down Payment %</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={down}
              onChangeText={setdown} /></View>
          </View>
          <Text style={styles.header}>Find out Monthly Payment:</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Mortgage Result', { cost:cost,int:int,yr:yr, down:down })} style={styles.submitButton}>
            <Text style={styles.header1}>Enter</Text>
          </TouchableOpacity>
          <View style={styles.mainblockcontent1}>
          <Icon name="arrow-back-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Compound Interest Calculator')}
          />
          <Icon name="arrow-forward-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Cost Profit Calculator')}
          />


        </View>

        </View>
      </View>
    </ScrollView>
  );

}
function MortgageResScreen({ route,navigation }) {
  const { cost } = route.params;
  const { int } = route.params;
  const { yr } = route.params;
  const { down } = route.params;
  var comment='\n';
  var a = 0;
  var i = 0;
  var n = 0;
  var t = 0;
  var w = 0;
  var l = 0;  
  var final = 0;
  var d = 0;
  var loan = 0; 
  d=down/100
  d=cost*d
  loan=cost-d

  t=yr*12
  i=int/100
  a=i/12
  i=1+a
  n=Math.pow(i,t)
  n=n.toFixed(3)
  w=a*n
  l=n-1
  l=w/l
  final=loan*l
  final=final.toFixed(2)
  comment='This the Monthly Payment: ';

  
  return (
    
    <View style={styles.maincontainer}>
      <View style={styles.headerview}>
        <View style={styles.iconheading}>
          </View>
          
      </View>
      <View style={styles.contentblock2}>
        
        <Text>{comment}</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.title}>{final}</Text>
        <Text>{'\n'}</Text>
        <Text>The Down payment amount is:</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.subtitle}>{d}</Text>
        <Text>{'\n'}</Text>
        <Text>The Loan amount is:</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.subtitle}>{loan}</Text>
        
      </View>
    </View>
  );

}
function CostScreen({ navigation }) {
  const [cost,setcost] = React.useState();
  const [revenue,setrev] = React.useState();
  
  return (

    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.maincontainer}>
        <View style={styles.headerview}>
        <View style={styles.iconheading}>
          <Icon name="calculator-outline" size={30} color="#37ECB9"
            onPress={() => navigation.navigate('Home')}
          /></View>
          
          <View style={styles.topheading}>
            <Text style={styles.topheadingtext}>Cost Profit</Text>
          </View>
          <View style={styles.iconheading}>
            <Icon name="menu" size={30} color="#37ECB9"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            /></View>
        </View>
        <View style={styles.contentblock1}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
          <View style={styles.mainblock1}>
          <View style={styles.calctext}>
            <Text style={styles.header}>Cost of Goods sold</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={cost}
              onChangeText={setcost}/></View>
          </View>
          <View style={styles.mainblock1}>
          <View style={styles.calctext}>
            <Text style={styles.header}>Revenue Generated</Text></View>
            <View style={styles.calcinp}>
            <TextInput
              style={styles.input}
              
              keyboardType='numeric'
              value={revenue}
              onChangeText={setrev}/></View>
          </View>
          
          <Text style={styles.header}>Find out Profit and Margin:</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Cost Result', { cost:cost,revenue:revenue })} style={styles.submitButton}>
            <Text style={styles.header1}>Enter</Text>
          </TouchableOpacity>
          <View style={styles.mainblockcontent1}>
          <Icon name="arrow-back-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Mortgage Calculator')}
          />
          <Icon name="arrow-forward-circle" size={46} color="#37ECB9" padding={10}
            onPress={() => navigation.navigate('Loan Calculator')}
          />


        </View>


        </View>
      </View>
    </ScrollView>
  );

}
function CostResScreen({ route,navigation }) {
  

    const { cost } = route.params;
    const { revenue } = route.params;
    
    var comment='\n';
    var margin = 0;
    
    var final = 0;
    
    
    final=revenue-cost
    margin=100*(final/revenue)

    comment='This is the Profit: ';
  
    
    return (
      
      <View style={styles.maincontainer}>
        <View style={styles.headerview}>
          <View style={styles.iconheading}>
            </View>
            
        </View>
        <View style={styles.contentblock2}>
          
          <Text>{comment}</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.title}>{final}</Text>
          <Text>{'\n'}</Text>
          <Text>The Profit Margin is:</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.subtitle}>{margin}%</Text>
       
          
          
        </View>
      </View>
  );

}






const Tab = createBottomTabNavigator();

function App() {
  return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Information') {
          return (
            <Ionicons
              name={
                'home-outline'
              }
              size={33}
              color={color}
            />
          );
        } else if (route.name === 'Calculator') {
          return (
            <Ionicons
              name={'calculator-outline'}
              size={33}
              color={color}
            />
          );
        }
      },
    })}
      tabBarOptions={{
        activeTintColor: '#59F7CA',
        inactiveTintColor: 'gray',
        showLabel: false
      }}>
      <Tab.Screen name="Information" component={HomeScreen} />
      <Tab.Screen name="Calculator" component={Drawer2} />
    </Tab.Navigator>

  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Information' component={App} />
        <Drawer.Screen name='Loans Basics' component={LoanScreen} />
        <Drawer.Screen name='Simple Interest' component={SimpleScreen} />
        <Drawer.Screen name='Compound Interest' component={CompoundScreen} />
        <Drawer.Screen name='Mortgage' component={MortgageScreen} />
        <Drawer.Screen name='Tax' component={TaxScreen} />
        <Drawer.Screen name='Credit Score' component={CreditScoreScreen} />
        <Drawer.Screen name='Business Fundamentals' component={BusinessScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

const CalcDrawer = createDrawerNavigator();

function Drawer2() {
  return (

    <CalcDrawer.Navigator initialRouteName={CalculatorHomeScreen}>
      <CalcDrawer.Screen name='Home' component={CalculatorHomeScreen} />
      <CalcDrawer.Screen name='Loan Calculator' component={Results} />
      <CalcDrawer.Screen name='Simple Interest Calculator' component={Simple} />
      <CalcDrawer.Screen name='Compound Interest Calculator' component={Compound} />
      <CalcDrawer.Screen name='Mortgage Calculator' component={Mortgage} />
      <CalcDrawer.Screen name='Cost Profit Calculator' component={Cost} />
    </CalcDrawer.Navigator>


  );
}

const stack = createStackNavigator();

function Results() {
  return (
    <stack.Navigator initialRouteName={LoanCalculatorScreen}>
      <stack.Screen name='Loan Calculator' component={LoanCalculatorScreen} options={{ headerShown: false }} />
      <stack.Screen name='Loan Result' component={LoanCalcResScreen} />


    </stack.Navigator>

  );
}
function Simple() {
  return (
    <stack.Navigator initialRouteName={SimpleCalculatorScreen}>
      

      <stack.Screen name='Simple Interest Calculator' component={SimpleCalculatorScreen} options={{ headerShown: false }} />
      <stack.Screen name='Simple Result' component={SimpleCalcResScreen} />

      
    </stack.Navigator>

  );
}

function Compound() {
  return (
    <stack.Navigator initialRouteName={CompoundCalculatorScreen}>
      

      <stack.Screen name='Compound Interest Calculator' component={CompoundCalculatorScreen} options={{ headerShown: false }} />
      <stack.Screen name='Compound Result' component={CompoundCalcResScreen} />

      
    </stack.Navigator>

  );
}
function Mortgage() {
  return (
    <stack.Navigator initialRouteName={MortgageCalculatorScreen}>
      

      <stack.Screen name='Mortgage Calculator' component={MortgageCalculatorScreen} options={{ headerShown: false }} />
      <stack.Screen name='Mortgage Result' component={MortgageResScreen} />

      
    </stack.Navigator>

  );
}
function Cost() {
  return (
    <stack.Navigator initialRouteName={CostScreen}>
      

      <stack.Screen name='Cost Profit Calculator' component={CostScreen} options={{ headerShown: false }} />
      <stack.Screen name='Cost Result' component={CostResScreen} />

      
    </stack.Navigator>

  );
}

const styles = StyleSheet.create({
  scrollcontainer: {
    backgroundColor: '#FFFFFF',
  },
  maincontainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconheading: {

    paddingLeft:15,
    justifyContent: 'space-evenly'
  },
  title: {
    justifyContent: 'center',
    fontSize: 40,
    color: "#000000",
    alignItems: 'center',
    fontWeight: 'bold'
  },
   bcgroundimage:{
    
    justifyContent:'center',
    width:377,
    height:202
  },
  
  bcgroundimage1:{
    
    justifyContent:'center',
    width:375,
    height:175
  },
  titlew: {
    
    fontSize: 15,
    color: '#000000',
    
    fontWeight: 'bold',
    
  },
  txtfront:{
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    padding:15,
    backgroundColor:'#FFFFFF' 
  },
  top:{
    alignItems:'center',
    justifyContent:'center',
    flex:4,
    
  },
  subtitle: {
    justifyContent: 'center',
    fontSize: 30,
    color: "#3CE7BD",
    alignItems: 'center',
    fontWeight: '600'
  },
  single:{
    lineHeight:55
  },
  button: {
    backgroundColor: '#37ECB9',
    
    overflow: 'hidden',
    justifyContent:'center',
    color: '#FFFFFF',

    width: 150,
    height: 93,
    textAlignVertical:'center',
    padding: 15,
    marginVertical: 9,
    marginHorizontal: 10,
    alignItems: 'center',
    fontSize:17,
    textAlign: 'center',
    fontWeight: '700',
    borderRadius: 10
  },
  button1: {
    backgroundColor: '#37ECB9',
    overflow: 'hidden',
    justifyContent:'center',

    color: '#FFFFFF',
    width: 150,
    height: 95,
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    fontSize:17,
    textAlign: 'center',
    fontWeight: '700',
    borderRadius: 10
  },
  mainblock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    textAlignVertical:'center'
  },
  
  mainblock1: {
    
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal:20,
    marginVertical:8,
    margin:10,
    padding:10

  },
  mainblockcontent: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center'

  },
  mainblockcontent1: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    marginTop:20

  },
  headerviewnormal: {
    flex: 2,
    marginHorizontal: 8,
    flexDirection: 'row',
    padding: 8,
    marginTop:27,
    marginLeft: 310,
  
    
  },
  headerview: {
    flex: 2,
    marginHorizontal: 10,
    marginVertical:10,
    flexDirection: 'row',
    padding: 15,
    paddingRight:15,
    paddingTop:20,
    justifyContent:'space-evenly',
    
    
  },
  headerview1: {
    flex: 2,
    marginHorizontal: 10,
    marginVertical:10,
    flexDirection: 'row',
    padding: 15,
    
    marginTop:20,
    justifyContent:'space-evenly',
    
    
  },
  contentblock: {
    flex: 9,
    justifyContent:'space-between',
    alignItems: 'stretch',
    padding: 3,
    textAlign:'justify',
    flexDirection:'column',
    marginVertical: 20
  },
  contentblock2: {
    flex: 9,
    justifyContent:'flex-start',
    alignItems: 'center',
    padding: 3,
    textAlign:'justify',
    flexDirection:'column',
    marginVertical: 20
  },
  contentblock3: {
    flex: 9,
    
    alignItems: 'center',
    padding: 3,
    textAlign:'justify',
    flexDirection:'column',
    marginVertical: 20
  },
  contentblock1: {
    flex: 9,
    justifyContent:'space-between',
    alignItems: 'center',
    margin:5,
    flexDirection:'column',
    marginVertical: 13
    
  },
  header: {
    fontWeight: '700',
    textAlign: 'left',
    padding: 15,
    fontSize:15
  },
  header2: {
    fontWeight: '600',
    textAlign: 'left',
    padding: 15,
  textAlign:'center'
  },
  header1: {
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'left',
    padding: 15,
    fontSize:15
  },
  body: {
    fontWeight: '400',
    textAlign: 'justify',
    padding: 15
  },
  topheadingtext: {
    fontSize: 18,
    
    fontWeight: 'bold',
    justifyContent: 'space-evenly'
  },
  topheading: {

    
    justifyContent: 'space-around',
    paddingLeft: 20,
  },
  image: {
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 268,
    height: 147
  },
  bold: {
    fontWeight: '600'
  },
  input: {
    borderRadius: 45,
    width:140,
    height: 40,
    padding:10,
    borderColor: '#424949',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#37ECB9',
    color: '#FFFFFF',
    alignContent: 'center',
    alignItems:'center',
    width: 100,
    height: 50,
    borderRadius: 45
  },
  imageContainerIOS: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius:10,
    overflow: 'hidden',
    
    },
    calctxt:{
      flex:1,
      flexDirection:'row',
      textAlign:'left'
    },
    calcinp:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center'

    },
});

export default MyDrawer;