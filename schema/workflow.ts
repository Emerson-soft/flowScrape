import { z } from "zod";

export const createWorkFlowSchema = z.object({
  name: z.string().max(50),
  description: z.string().max(50)
})

export type createWorkflowSchemaType = z.infer<typeof createWorkFlowSchema>;