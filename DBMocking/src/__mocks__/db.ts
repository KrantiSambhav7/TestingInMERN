// This __mocks__ folder is in the same level of the object we want to mock like db.ts here

import { PrismaClient } from "../generated/prisma";
import {mockDeep , mockReset} from "vitest-mock-extended"
export const prisma = mockDeep<PrismaClient>(); // All the models will be mockes 

