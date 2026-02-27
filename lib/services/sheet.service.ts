import { formatInTimeZone } from "date-fns-tz";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

class SheetService {
  doc: GoogleSpreadsheet;

  constructor() {
    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    this.doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID!, auth);
  }

  async addContactForm(data: {
    Name: string;
    Email: string;
    ProjectType: string;
    Description: string;
    IpLocation: string;
    SourceUrl: string;
    ReferrerUrl: string;
    EntryUrl: string;
  }) {
    await this.doc.loadInfo();

    const sheet = this.doc.sheetsByTitle["submissions"];

    await sheet.addRow({
      ...data,
      CreatedAt: formatInTimeZone(
        new Date(),
        "Asia/Kolkata",
        "dd/MM/yyyy hh:mm aa"
      ),
    });
  }
}

export default new SheetService();
