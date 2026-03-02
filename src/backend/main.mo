import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";



actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    district : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(i1 : Inquiry, i2 : Inquiry) : Order.Order {
      Text.compare(i1.name, i2.name);
    };
  };

  let inquiriesList = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, district : Text) : async () {
    let inquiry : Inquiry = {
      name;
      phone;
      district;
      timestamp = Time.now();
    };
    inquiriesList.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiriesList.toArray().sort();
  };
};
