#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

import pytest
from source_google_ads.utils import GAQL, QueryParseException


def test_parse_GAQL_ok():
    sql = GAQL.parse("SELECT field FROM table")
    assert sql.fields == ("field",)
    assert sql.resource_name == "table"
    assert sql.where == ""
    assert sql.order_by == ""
    assert sql.limit is None
    assert sql.parameters == ""
    assert str(sql) == "SELECT field FROM table"

    sql = GAQL.parse("SELECT field1, field2 FROM x_Table ")
    assert sql.fields == ("field1", "field2")
    assert sql.resource_name == "x_Table"
    assert sql.where == ""
    assert sql.order_by == ""
    assert sql.limit is None
    assert sql.parameters == ""
    assert str(sql) == "SELECT field1, field2 FROM x_Table"

    sql = GAQL.parse("SELECT field1, field2 FROM x_Table WHERE date = '2020-01-01' ")
    assert sql.fields == ("field1", "field2")
    assert sql.resource_name == "x_Table"
    assert sql.where == "date = '2020-01-01'"
    assert sql.order_by == ""
    assert sql.limit is None
    assert sql.parameters == ""
    assert str(sql) == "SELECT field1, field2 FROM x_Table WHERE date = '2020-01-01'"

    sql = GAQL.parse("SELECT field1, field2 FROM x_Table WHERE date = '2020-01-01' ORDER  BY field2, field1 ")
    assert sql.fields == ("field1", "field2")
    assert sql.resource_name == "x_Table"
    assert sql.where == "date = '2020-01-01'"
    assert sql.order_by == "field2, field1"
    assert sql.limit is None
    assert sql.parameters == ""
    assert str(sql) == "SELECT field1, field2 FROM x_Table WHERE date = '2020-01-01' ORDER BY field2, field1"

    sql = GAQL.parse("SELECT t.field1, t.field2 FROM x_Table ORDER  BY field2, field1 LIMIT 10 ")
    assert sql.fields == ("t.field1", "t.field2")
    assert sql.resource_name == "x_Table"
    assert sql.where == ""
    assert sql.order_by == "field2, field1"
    assert sql.limit == 10
    assert sql.parameters == ""
    assert str(sql) == "SELECT t.field1, t.field2 FROM x_Table ORDER BY field2, field1 LIMIT 10"

    sql = GAQL.parse("""
        SELECT field1, field2
          FROM x_Table
         WHERE date = '2020-01-01'
      ORDER BY field2 ASC, field1 DESC
         LIMIT 10
    PARAMETERS include_drafts=true """)

    assert sql.fields == ("field1", "field2")
    assert sql.resource_name == "x_Table"
    assert sql.where == "date = '2020-01-01'"
    assert sql.order_by == "field2 ASC, field1 DESC"
    assert sql.limit == 10
    assert sql.parameters == "include_drafts=true"
    assert str(sql) == "SELECT field1, field2 FROM x_Table WHERE date = '2020-01-01' ORDER BY field2 ASC, field1 DESC LIMIT 10 PARAMETERS include_drafts=true"


def test_parse_GAQL_fail():
    with pytest.raises(QueryParseException) as e:
        GAQL.parse("SELECT field1, field2 FROM x_Table2")
    assert str(e.value) == "incorrect GAQL query statement: 'SELECT field1, field2 FROM x_Table2'"

    with pytest.raises(QueryParseException) as e:
        GAQL.parse("SELECT field1, field2 FROM x_Table WHERE ")
    with pytest.raises(QueryParseException) as e:
        GAQL.parse("SELECT field1, , field2 FROM table")
    with pytest.raises(QueryParseException) as e:
        GAQL.parse("SELECT fie ld1, field2 FROM table")
    with pytest.raises(QueryParseException) as e:
        GAQL.parse("SELECT field1, field2 FROM customer, campaign_labels")
    assert str(e.value) == "incorrect GAQL query statement: 'SELECT field1, field2 FROM customer, campaign_labels': multuple resource_names not allowed"


@pytest.mark.parametrize(
    "query, fields",
    [
        (
            """
SELECT
  campaign.id,
  campaign.name,
  campaign.status,
  metrics.impressions
FROM campaign
WHERE campaign.status = 'PAUSED'
AND metrics.impressions > 100
ORDER BY campaign.status
    """,
            ["campaign.id", "campaign.name", "campaign.status", "metrics.impressions"],
        ),
        (
            """
SELECT
  campaign.accessible_bidding_strategy,
  segments.ad_destination_type,
  campaign.start_date,
  campaign.end_date
FROM campaign
    """,
            ["campaign.accessible_bidding_strategy", "segments.ad_destination_type", "campaign.start_date", "campaign.end_date"],
        ),
    ],
)
def test_get_query_fields(query, fields):
    assert list(GAQL.parse(query).fields) == fields
