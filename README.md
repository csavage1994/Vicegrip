# Vicegrip

Vicegrip is a habit tracking app accompanied by a stats page for long-term tracking and goal setting.

## Building

In the current state, this has only been tested on android and will most likely break on IOS until we set up a testing environment for it.

1. Clone repo
2. run `npm install`
3. Make sure you have either a device attached or an emulator running
4. run `react-native run-android`

The app should run and you'll be greeted by an empty list screen, which you can then click on the add button to begin tracking whatever you please

## TODOS

* Create the detailed screen
    * Modify the way counts are stored so we can actually display the data over time, maybe something like this?

``` 
{
    4/14/17: [{title: 'smoke', count: 5}],
    4/15/17: [{title: 'smoke', count: 4}],
    ..
}
```

Or we could get more granular:

```
{
    smoke: ['Sun Apr 16 2017 10:31:52 GMT-0500 (CDT)'],
    walkTheDog: ['Sun Apr 16 2017 10:36:52 GMT-0500 (CDT)', Tue Apr 18 2017 10:31:52 GMT-0500 (CDT)]
}
```

Using something like the latter would let us create more detailed graphs, and we could also map the set into days/months fairly easily

* Create an actual design for the app, currently the buttons are just colored squares for the time being