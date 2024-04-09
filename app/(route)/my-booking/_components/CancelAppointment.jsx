import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteAppointment } from "@/lib/db_operations";
import React from "react";
import { toast } from "sonner";

function CancelAppointment({ id, updateRecord }) {
  console.log(updateRecord);
  const handleConfirm = async () => {
    toast(
      "Your appointment cancellation is pending confirmation. Please wait."
    );
    try {
      await deleteAppointment(id);
      updateRecord();
      toast("Appointment Deleted successfully");
    } catch (error) {
      toast("Failed to Delete Appointment");
      toast({
        variant: "destructive",
        title: "Failed to Delete Appointment",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {" "}
        <Button variant="outline">Cancel Appointment</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            appointment and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleConfirm()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CancelAppointment;
