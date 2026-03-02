import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Phone = string;
export type GeoLocation = string;
export interface ContactInquiry {
    name: string;
    message: string;
    phone: Phone;
    location: GeoLocation;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<ContactInquiry>>;
    submitInquiry(name: string, _phone: string, location: string, message: string): Promise<void>;
}
