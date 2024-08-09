import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Switch,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const PrivacyAndDataScreen = () => {
  const [preferencesEnabled, setPreferencesEnabled] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Privacy Policy</Text>
        <Text style={styles.item}>
          Welcome to our Cafe Application. Your privacy is important to us, and
          we are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, share, and protect your data when
          you use our application to order items for pickup or home delivery.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Personal Information Collected</Text>
        <Text style={styles.item}>
          - Personal Details: Full Name, Email Address, Phone Number
        </Text>
        <Text style={styles.item}>
          - Order Information: Order History, Favorite Items, Special
          Instructions
        </Text>
        <Text style={styles.item}>
          - Delivery Information: Home Address, Delivery Preferences
        </Text>
        <Text style={styles.item}>
          - Payment Information: Credit/Debit Card Details, Billing Address
        </Text>
        <Text style={styles.item}>
          - Usage Data: App Interactions, Browsing History, IP Address
        </Text>
        <Text style={styles.item}>
          - Location Data: GPS Data for Delivery Services
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>How Information is Used</Text>
        <View style={styles.itemContainer}>
          <FontAwesome name='shopping-cart' size={24} color='black' />
          <Text style={styles.itemText}>Process Orders</Text>
        </View>
        <View style={styles.itemContainer}>
          <FontAwesome name='heart' size={24} color='black' />
          <Text style={styles.itemText}>Enhance User Experience</Text>
        </View>
        <View style={styles.itemContainer}>
          <FontAwesome name='credit-card' size={24} color='black' />
          <Text style={styles.itemText}>Payment Processing</Text>
        </View>
        <View style={styles.itemContainer}>
          <FontAwesome name='envelope' size={24} color='black' />
          <Text style={styles.itemText}>Communication</Text>
        </View>
        <View style={styles.itemContainer}>
          <FontAwesome name='line-chart' size={24} color='black' />
          <Text style={styles.itemText}>Analytics and Improvements</Text>
        </View>
        <View style={styles.itemContainer}>
          <FontAwesome name='location-arrow' size={24} color='black' />
          <Text style={styles.itemText}>Location-Based Services</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>
          Data Sharing and Third-Party Access
        </Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.expandButton}>
            {expanded ? "Hide Details" : "Show Details"}
          </Text>
        </TouchableOpacity>
        {expanded && (
          <View>
            <Text style={styles.item}>
              - Payment Processing: With payment gateways for secure
              transactions.
            </Text>
            <Text style={styles.item}>
              - Delivery Services: With delivery partners to ensure timely order
              deliveries.
            </Text>
            <Text style={styles.item}>
              - Marketing Services: With marketing partners for promotions and
              offers.
            </Text>
            <Text style={styles.item}>
              - Analytics: With analytics providers to understand usage patterns
              and improve services.
            </Text>
          </View>
        )}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>User Rights and Choices</Text>
        <Text style={styles.item}>
          You have the following rights regarding your personal information:
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request Access</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request Correction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request Deletion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Object to Processing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request Portability</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Withdraw Consent</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Security Measures</Text>
        <View style={styles.itemContainer}>
          <MaterialIcons name='verified-user' size={24} color='black' />
          <Text style={styles.itemText}>
            Encryption: Data encryption both in transit and at rest.
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <MaterialIcons name='lock' size={24} color='black' />
          <Text style={styles.itemText}>
            Access Controls: Restricting access to personal data to authorized
            personnel only.
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <MaterialIcons name='security' size={24} color='black' />
          <Text style={styles.itemText}>
            Regular Audits: Conducting regular security audits to identify
            vulnerabilities.
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <MaterialIcons name='payment' size={24} color='black' />
          <Text style={styles.itemText}>
            Secure Payment Processing: Using trusted payment gateways for
            transactions.
          </Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>
          Cookies and Tracking Technologies
        </Text>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Remember Preferences</Text>
          <Switch
            value={preferencesEnabled}
            onValueChange={(value) => setPreferencesEnabled(value)}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Analytics</Text>
          <Switch
            value={analyticsEnabled}
            onValueChange={(value) => setAnalyticsEnabled(value)}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Marketing</Text>
          <Switch
            value={marketingEnabled}
            onValueChange={(value) => setMarketingEnabled(value)}
          />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Children’s Privacy</Text>
        <Text style={styles.item}>
          Our app is not intended for use by individuals under the age of 13. We
          do not knowingly collect personal information from children under 13.
          If we become aware that we have inadvertently collected such data, we
          will take immediate steps to delete it.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Changes to the Privacy Policy</Text>
        <Text style={styles.item}>
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page, and we will notify you through the app or via
          email before the changes take effect.
        </Text>
        <Text style={styles.date}>Last Updated: August 8, 2024</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Contact Information</Text>
        <Text style={styles.item}>
          If you have any questions or concerns about our Privacy Policy or data
          practices, please contact us at:
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:support@coffeeshop.com")}>
          <Text style={styles.link}>Email: support@coffeeshop.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("tel:+11234567890")}>
          <Text style={styles.link}>Phone: (123) 456-7890</Text>
        </TouchableOpacity>
        <Text style={styles.item}>
          Address: 123 Coffee Lane, Coffee City, CA 90210
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Legal Compliance</Text>
        <Text style={styles.item}>
          We comply with all applicable data protection laws, including GDPR and
          CCPA. Our commitment to legal compliance ensures that your data is
          handled with the highest standards of privacy and security.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 8,
  },
  expandButton: {
    color: "#007bff",
    fontSize: 16,
    marginVertical: 4,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    color: "#007bff",
    marginVertical: 4,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
});

export default PrivacyAndDataScreen;
