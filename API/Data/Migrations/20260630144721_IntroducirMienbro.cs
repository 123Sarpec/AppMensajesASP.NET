using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class IntroducirMienbro : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fotos_Miembros_miembrosId",
                table: "Fotos");

            migrationBuilder.RenameColumn(
                name: "Cuidad",
                table: "Miembros",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "miembrosId",
                table: "Fotos",
                newName: "MiembrosId");

            migrationBuilder.RenameIndex(
                name: "IX_Fotos_miembrosId",
                table: "Fotos",
                newName: "IX_Fotos_MiembrosId");

            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Miembros",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<string>(
                name: "Ciudad",
                table: "Miembros",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "MiembrosId",
                table: "Fotos",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Fotos_Miembros_MiembrosId",
                table: "Fotos",
                column: "MiembrosId",
                principalTable: "Miembros",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fotos_Miembros_MiembrosId",
                table: "Fotos");

            migrationBuilder.DropColumn(
                name: "Ciudad",
                table: "Miembros");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Miembros",
                newName: "Cuidad");

            migrationBuilder.RenameColumn(
                name: "MiembrosId",
                table: "Fotos",
                newName: "miembrosId");

            migrationBuilder.RenameIndex(
                name: "IX_Fotos_MiembrosId",
                table: "Fotos",
                newName: "IX_Fotos_miembrosId");

            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Miembros",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "miembrosId",
                table: "Fotos",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_Fotos_Miembros_miembrosId",
                table: "Fotos",
                column: "miembrosId",
                principalTable: "Miembros",
                principalColumn: "Id");
        }
    }
}
