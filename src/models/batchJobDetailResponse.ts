// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type BatchJobId, BatchJobIdSerializer } from "./batchJobId.js";
import { type BatchJobStatus, BatchJobStatusSerializer } from "./batchJobStatus.js";
import { type BatchJobType, BatchJobTypeSerializer } from "./batchJobType.js";

export interface BatchJobDetailResponse {
  completedAt?: Date | null | undefined;
  createdAt: Date;
  createdBy: string;
  errorCsvUrl?: string | null | undefined;
  failedItems: number;
  failureCount: number;
  hasErrorCsv: boolean;
  hasOutput: boolean;
  id: BatchJobId;
  inputFileName?: string | null | undefined;
  inputFileUrl?: string | null | undefined;
  jobType: BatchJobType;
  outputUrl?: string | null | undefined;
  processedItems: number;
  status: BatchJobStatus;
  totalItems?: number | null | undefined;
}

/** Converts `BatchJobDetailResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const BatchJobDetailResponseSerializer = {
  parse(json: any, path = "$"): BatchJobDetailResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "completed_at",
        "created_at",
        "created_by",
        "error_csv_url",
        "failed_items",
        "failure_count",
        "has_error_csv",
        "has_output",
        "id",
        "input_file_name",
        "input_file_url",
        "job_type",
        "output_url",
        "processed_items",
        "status",
        "total_items",
      ]),
      completedAt:
        json["completed_at"] != null
          ? decodeDateTime(json["completed_at"], path, "completed_at")
          : json["completed_at"],
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      createdBy: decodeString(json["created_by"], path, "created_by"),
      errorCsvUrl:
        json["error_csv_url"] != null
          ? decodeString(json["error_csv_url"], path, "error_csv_url")
          : json["error_csv_url"],
      failedItems: decodeInteger(json["failed_items"], path, "failed_items"),
      failureCount: decodeInteger(json["failure_count"], path, "failure_count"),
      hasErrorCsv: decodeBoolean(json["has_error_csv"], path, "has_error_csv"),
      hasOutput: decodeBoolean(json["has_output"], path, "has_output"),
      id: BatchJobIdSerializer.parse(json["id"], decodePath(path, "id")),
      inputFileName:
        json["input_file_name"] != null
          ? decodeString(json["input_file_name"], path, "input_file_name")
          : json["input_file_name"],
      inputFileUrl:
        json["input_file_url"] != null
          ? decodeString(json["input_file_url"], path, "input_file_url")
          : json["input_file_url"],
      jobType: BatchJobTypeSerializer.parse(
        json["job_type"],
        decodePath(path, "job_type")
      ),
      outputUrl:
        json["output_url"] != null
          ? decodeString(json["output_url"], path, "output_url")
          : json["output_url"],
      processedItems: decodeInteger(json["processed_items"], path, "processed_items"),
      status: BatchJobStatusSerializer.parse(json["status"], decodePath(path, "status")),
      totalItems:
        json["total_items"] != null
          ? decodeInteger(json["total_items"], path, "total_items")
          : json["total_items"],
    };
  },

  serialize(value: BatchJobDetailResponse): any {
    return {
      ...extraProperties(value, [
        "completedAt",
        "createdAt",
        "createdBy",
        "errorCsvUrl",
        "failedItems",
        "failureCount",
        "hasErrorCsv",
        "hasOutput",
        "id",
        "inputFileName",
        "inputFileUrl",
        "jobType",
        "outputUrl",
        "processedItems",
        "status",
        "totalItems",
      ]),
      completed_at: value.completedAt,
      created_at: value.createdAt,
      created_by: value.createdBy,
      error_csv_url: value.errorCsvUrl,
      failed_items: value.failedItems,
      failure_count: value.failureCount,
      has_error_csv: value.hasErrorCsv,
      has_output: value.hasOutput,
      id: BatchJobIdSerializer.serialize(value.id),
      input_file_name: value.inputFileName,
      input_file_url: value.inputFileUrl,
      job_type: BatchJobTypeSerializer.serialize(value.jobType),
      output_url: value.outputUrl,
      processed_items: value.processedItems,
      status: BatchJobStatusSerializer.serialize(value.status),
      total_items: value.totalItems,
    };
  },
};
