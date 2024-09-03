# # Define a list
# my_list = [1, 2, 3, 4, 5]

# # Convert the list to a tuple
# my_tuple = tuple(my_list)

# # Print the tuple
# print("Original list:", my_list)
# print("Converted tuple:", my_tuple)

# tup=(1,2,3,4,5)
# res=list(tup)
# print(res)
# print(type(res))
# res[2]=55
# r=tuple(res)
# print(r)
# print(type(r))

# dicionay

# info = {
#     "name": "Jashan",
#     "age": 19,
#     "city": "New York"
# }

# print((info)["name"])

student = {"name": "Jashan", "subject": {"math": 90, "science": 80}}
# print(student["subject"]["science"])
# print(dict.keys(student))
# student.keys() 
# print(student.values())
# print(student.items())
# print(student.get("key")) 
print(student.update({"name": "arsh"}))