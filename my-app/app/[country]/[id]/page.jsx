"use client";
import React from "react";
import { getReviews } from "@/app/lib/getReviews";
import { Badge, Table } from "@radix-ui/themes";
import LineChart from "@/app/components/linechart";

export default async function Reviews({ params }) {
  const country = `${params.country}`;
  const id = `${params.id}`;
  const reviews = await getReviews(country, id);

  return (
    <>
      <LineChart />
      <Table.Root size={"1"} variant={"surface"} layout={"auto"}>
        <Table.Header align={"center"}>
          <Table.Row>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Rating</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Content</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Version</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {reviews.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>
                {item.rating >= 4 ? (
                  <Badge color="cyan">{item.rating}</Badge>
                ) : item.rating <= 2 ? (
                  <Badge color="crimson">{item.rating}</Badge>
                ) : (
                  <Badge color="orange">{item.rating}</Badge>
                )}
              </Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.content}</Table.Cell>
              <Table.Cell>{item.version}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
