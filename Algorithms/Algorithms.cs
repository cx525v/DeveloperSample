using System;
using System.Linq;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n) => n == 1 ? 1 : n * GetFactorial(n - 1);

        public static string FormatSeparators(params string[] items)
        {
            return items.Length == 1 ? items[0] : items.Length == 2 ? $"{items[0]} and {items[1]}" : $"{items[0]}, {FormatSeparators(items.Skip(1).ToArray())}" ;
        }
    }
}