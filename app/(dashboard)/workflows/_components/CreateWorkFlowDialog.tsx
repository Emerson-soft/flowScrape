"use client";
import CustomDialogHeader from '@/components/CustomDialogHeader';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Layers2Icon } from 'lucide-react';
import React, { useState } from 'react'

type ICreateWorkFlowDialogProps = {
  triggerText?: string
}

function CreateWorkFlowDialog({ triggerText }: ICreateWorkFlowDialogProps) {
  const [open, setOpen] = useState(false);
  return ( 
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{triggerText ?? "Create workflow"}</Button>
      </DialogTrigger>
      <DialogContent className='px-0'>
        <CustomDialogHeader
          icon={Layers2Icon}
          title="Create Workflow"
          subtitle="Start building your workflow"
        />        
      </DialogContent>
    </Dialog>
  )
}

export default CreateWorkFlowDialog