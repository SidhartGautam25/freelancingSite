/**
 * Lead Inquiry API Client
 * Submits lead data to the central devlooper studio backend
 */

export interface SelectedPackagePayload {
  id: string;
  name: string;
  category?: string;
  priceInr?: number | null;
}

export interface LeadInquiryPayload {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  selectedPackage?: SelectedPackagePayload;
  projectDetails?: string;
  sourceUrl?: string;
  sourceComponent?: string;
}

export interface LeadInquirySuccessResponse {
  success: true;
  message: string;
  data: {
    leadId: string;
    createdAt: string;
  };
}

export interface LeadInquiryErrorResponse {
  success: false;
  error: string;
  details?: string[];
}

export type LeadInquiryResponse =
  | LeadInquirySuccessResponse
  | LeadInquiryErrorResponse;

const DEFAULT_BACKEND_URL = "https://workspace.devlooperstudio.com";

export async function submitLeadInquiry(
  payload: LeadInquiryPayload,
): Promise<LeadInquiryResponse> {
  const backendBase =
    process.env.NEXT_PUBLIC_BACKEND_API_URL?.replace(/\/+$/, "") ||
    DEFAULT_BACKEND_URL;

  const endpoint = `${backendBase}/api/leads`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: data.error || `Server responded with status ${res.status}`,
        details: data.details || [],
      };
    }

    return data as LeadInquirySuccessResponse;
  } catch (error) {
    console.error("Failed to submit lead inquiry:", error);
    return {
      success: false,
      error:
        "Unable to submit inquiry. Please check your internet connection or try again later.",
    };
  }
}
