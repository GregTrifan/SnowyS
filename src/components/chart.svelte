<script>
import { now } from "svelte/internal";


    import { AreaChart } from "@carbon/charts-svelte";
</script>
<div style="padding:10px">
<AreaChart
data={[
	{
		"group": "Dataset 1",
		"date": "2018-12-31T22:00:00.000Z",
		"value": 0
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-05T22:00:00.000Z",
		"value": -37312
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-07T22:00:00.000Z",
		"value": -22392
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-14T22:00:00.000Z",
		"value": -52576
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-18T22:00:00.000Z",
		"value": 20135
	},
	{
		"group": "Dataset 2",
		"date": "2018-12-31T22:00:00.000Z",
		"value": 47263
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-04T22:00:00.000Z",
		"value": 14178
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-07T22:00:00.000Z",
		"value": 23094
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-12T22:00:00.000Z",
		"value": 45281
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-18T22:00:00.000Z",
		"value": -63954
	},
    {
		"group": "Dataset 2",
		"date": "2019-01-20T22:00:00.000Z",
		"value": -610
	},
    {
		"group": "Dataset 2",
		"date": "2019-01-20T22:00:00.000Z",
		"value": -6100
	},
]}
	options={{
	"title": "Area (time series - natural curve)",
	"axes": {
		"bottom": {
			"title": "2019 Annual Sales Figures",
			"mapsTo": "date",
			"scaleType": "time"
		},
		"left": {
			"mapsTo": "value",
			"scaleType": "linear"
		}
	},
	"curve": "curveNatural",
	"height": "400px"
}}
	/>
</div>