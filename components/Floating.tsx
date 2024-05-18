import { MouseEventHandler } from "react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Floating({ onClick, generating,float, setFloat }: { onClick: MouseEventHandler<HTMLButtonElement> | undefined, generating: boolean, float:boolean,setFloat: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <AlertDialog open={float} onOpenChange={setFloat}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Hold On!</AlertDialogTitle>
                    <AlertDialogDescription>
                        We are making the magic happen, hold on a sec.
                        <br />
                        Click continue once the spinner vanishes
                        {generating ? <svg
                            className="animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg> : null}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button onClick={onClick} className={`${generating ? "cursor-not-allowed" : ""}`}>Continue</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}