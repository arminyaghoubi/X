using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace X.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddSeedDataInActivity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Activities",
                columns: new[] { "Id", "Category", "City", "CreationDate", "CreatorId", "Date", "Description", "LastModifiedDate", "ModifierId", "Title", "Venue" },
                values: new object[,]
                {
                    { new Guid("2c807c24-c03f-4b8f-b407-1bccfeb8c059"), "music", "Tehran", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2023, 11, 2, 19, 57, 13, 280, DateTimeKind.Local).AddTicks(8140), "Activity 2 months in future", null, null, "Future Activity 2", "Milad" },
                    { new Guid("39e3896b-440f-47fb-b0bc-e6651ab750d5"), "travel", "Mazandaran", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2023, 7, 2, 19, 57, 13, 280, DateTimeKind.Local).AddTicks(8147), "Activity 2 months ago", null, null, "Past Activity 1", "Motelgho" },
                    { new Guid("612ea22b-edee-4bf2-a8b5-52215d4b9919"), "film", "Tehran", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2023, 7, 2, 19, 57, 13, 280, DateTimeKind.Local).AddTicks(8097), "Activity 2 months ago", null, null, "Past Activity 1", "Azadi" },
                    { new Guid("914fed12-60e7-44a3-9483-06d92895fcba"), "sport", "Tehran", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2023, 12, 2, 19, 57, 13, 280, DateTimeKind.Local).AddTicks(8144), "Activity 3 months in future", null, null, "Future Activity 3", "Bam" },
                    { new Guid("cf93d885-7047-476e-a292-533975b5384a"), "film", "Tehran", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2023, 10, 2, 19, 57, 13, 280, DateTimeKind.Local).AddTicks(8125), "Activity 1 month in future", null, null, "Future Activity 1", "Farhang" },
                    { new Guid("e991677a-8cec-4644-b36e-60a6cbec3aae"), "music", "Tehran", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2023, 8, 2, 19, 57, 13, 280, DateTimeKind.Local).AddTicks(8121), "Activity 1 month ago", null, null, "Past Activity 2", "Vahdat" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("2c807c24-c03f-4b8f-b407-1bccfeb8c059"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("39e3896b-440f-47fb-b0bc-e6651ab750d5"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("612ea22b-edee-4bf2-a8b5-52215d4b9919"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("914fed12-60e7-44a3-9483-06d92895fcba"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("cf93d885-7047-476e-a292-533975b5384a"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("e991677a-8cec-4644-b36e-60a6cbec3aae"));
        }
    }
}
