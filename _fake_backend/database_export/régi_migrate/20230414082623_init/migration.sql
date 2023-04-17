-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_permissionId_fkey";

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
