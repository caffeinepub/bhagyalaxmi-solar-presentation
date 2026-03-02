import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type Phone = Text;
  type GeoLocation = Text;

  type ContactInquiry = {
    name : Text;
    phone : Phone;
    location : GeoLocation;
    message : Text;
  };

  module ContactInquiry {
    public func compare(ci1 : ContactInquiry, ci2 : ContactInquiry) : Order.Order {
      Text.compare(ci1.name, ci2.name);
    };
  };

  let inquiriesList = List.empty<ContactInquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, _phone : Text, location : Text, message : Text) : async () {
    if (name.size() == 0) { Runtime.trap("Name cannot be empty") };
    let inquiry : ContactInquiry = {
      name;
      phone = _phone;
      location;
      message;
    };
    inquiriesList.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    inquiriesList.toArray().sort();
  };
};
