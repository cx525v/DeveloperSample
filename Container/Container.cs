using System;
using System.Collections.Generic;

namespace DeveloperSample.Container
{
    public class Container
    {
        
        private readonly IDictionary<Type, Object> bindings = new Dictionary<Type, Object>();

        public void Bind(Type interfaceType, Type implementationType)
        {
            this.bindings[interfaceType] = Activator.CreateInstance(implementationType);
        }

        public T Get<T>()
        {
            var type = typeof(T);
            if (!this.bindings.ContainsKey(type))
            {
                throw new ApplicationException($"There is no binding defined for type: {type}");
            }

            return (T)(this.bindings[type]);
        }
    }
}